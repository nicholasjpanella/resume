'use client';

import type { ChatTransport, UIMessage, UIMessageChunk } from 'ai';
import { chatAction } from '@/app/actions';
import type { ChatMode } from '@/app/schemas';
import { ChatRateLimitError } from '@/lib/errors';

function serializeMessages(messages: UIMessage[]) {
  return messages.map((message) => ({
    id: message.id,
    role: message.role,
    parts: message.parts.flatMap((part) => {
      if (part.type !== 'text' || !('text' in part) || typeof part.text !== 'string') {
        return [];
      }
      return [{ type: 'text' as const, text: part.text }];
    }),
  }));
}

function replayChunks(chunks: UIMessageChunk[]): ReadableStream<UIMessageChunk> {
  return new ReadableStream({
    start(controller) {
      for (const chunk of chunks) {
        controller.enqueue(chunk);
      }
      controller.close();
    },
  });
}

class ServerActionChatTransport implements ChatTransport<UIMessage> {
  constructor(
    private getMode: () => ChatMode,
    private getJobDescription: () => string,
  ) {}

  async sendMessages({
    messages,
    abortSignal,
  }: Parameters<ChatTransport<UIMessage>['sendMessages']>[0]) {
    if (abortSignal?.aborted) {
      throw new DOMException('Aborted', 'AbortError');
    }

    const serialized = serializeMessages(messages);
    const hasEmptyMessage = serialized.some((message) => message.parts.length === 0);

    if (hasEmptyMessage) {
      throw new Error('Chat message is missing text content');
    }

    const result = await chatAction({
      messages: serialized,
      mode: this.getMode(),
      jobDescription: this.getJobDescription(),
    });

    if (!result.ok) {
      if (result.error === 'rate_limited') {
        throw new ChatRateLimitError();
      }
      throw new Error(result.error);
    }

    return replayChunks(result.chunks as UIMessageChunk[]);
  }

  async reconnectToStream() {
    return null;
  }
}

export function createChatTransport(
  getMode: () => ChatMode,
  getJobDescription: () => string,
) {
  return new ServerActionChatTransport(getMode, getJobDescription);
}
