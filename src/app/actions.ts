'use server';

import {
  convertToModelMessages,
  createUIMessageStream,
  streamText,
  type UIMessage,
  type UIMessageChunk,
} from 'ai';
import { headers } from 'next/headers';
import { getMaxTokens, getModel } from '@/lib/ai/provider';
import { trackServerEvent } from '@/lib/analytics-server';
import { buildSystemPrompt } from '@/lib/resume/prompt';
import { checkChatRateLimit } from '@/lib/rate-limit';
import {
  chatInputSchema,
  getTextFromMessage,
  validateMessageLength,
  type ChatActionResult,
  type ChatInput,
} from './schemas';

function formatJobFitMessage(jobDescription: string) {
  return `Analyze how Nicholas Panella's experience maps to this job description:\n\n${jobDescription}`;
}

function prepareMessages(input: ChatInput): UIMessage[] {
  if (input.mode !== 'job-fit' || !input.jobDescription?.trim()) {
    return input.messages as UIMessage[];
  }

  const last = input.messages[input.messages.length - 1];
  const jobMessage = {
    ...last,
    parts: [{ type: 'text' as const, text: formatJobFitMessage(input.jobDescription.trim()) }],
  };

  return [...input.messages.slice(0, -1), jobMessage] as UIMessage[];
}

async function collectStreamChunks(
  stream: ReadableStream<UIMessageChunk>,
): Promise<UIMessageChunk[]> {
  const chunks: UIMessageChunk[] = [];
  const reader = stream.getReader();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }

  return chunks;
}

export async function chatAction(rawInput: ChatInput): Promise<ChatActionResult> {
  const parsed = chatInputSchema.safeParse(rawInput);
  if (!parsed.success) {
    await trackServerEvent('chat_response_failed', {
      mode: rawInput.mode ?? 'chat',
      error: 'validation',
    });
    return { ok: false, error: 'validation' };
  }

  const input = parsed.data;
  const { rateLimited } = await checkChatRateLimit(await headers());

  if (rateLimited) {
    await trackServerEvent('chat_response_failed', {
      mode: input.mode,
      error: 'rate_limited',
    });
    return { ok: false, error: 'rate_limited' };
  }

  const messages = prepareMessages(input);
  const lastText = getTextFromMessage(
    messages[messages.length - 1] as Parameters<typeof getTextFromMessage>[0],
  );

  if (!validateMessageLength(lastText, input.mode)) {
    await trackServerEvent('chat_response_failed', {
      mode: input.mode,
      error: 'message_too_long',
    });
    return { ok: false, error: 'message_too_long' };
  }

  try {
    const stream = createUIMessageStream({
      originalMessages: messages,
      execute: async ({ writer }) => {
        const result = streamText({
          model: getModel(),
          system: buildSystemPrompt(input.mode),
          messages: await convertToModelMessages(messages),
          maxOutputTokens: getMaxTokens(),
        });
        writer.merge(result.toUIMessageStream());
      },
      onError: () => 'An error occurred while generating a response.',
    });

    const chunks = await collectStreamChunks(stream);

    if (chunks.length === 0) {
      await trackServerEvent('chat_response_failed', {
        mode: input.mode,
        error: 'chat_failed',
      });
      return { ok: false, error: 'chat_failed' };
    }

    await trackServerEvent('chat_response_success', { mode: input.mode });
    return { ok: true, chunks };
  } catch {
    await trackServerEvent('chat_response_failed', {
      mode: input.mode,
      error: 'chat_failed',
    });
    return { ok: false, error: 'chat_failed' };
  }
}
