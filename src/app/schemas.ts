import { z } from 'zod';

export const chatModeSchema = z.enum(['chat', 'job-fit']);

const messagePartSchema = z.object({
  type: z.string(),
  text: z.string().optional(),
});

const uiMessageSchema = z.object({
  id: z.string(),
  role: z.enum(['user', 'assistant', 'system']),
  parts: z.array(messagePartSchema).min(1),
});

export const chatInputSchema = z.object({
  messages: z.array(uiMessageSchema).min(1).max(50),
  mode: chatModeSchema.default('chat'),
  jobDescription: z.string().max(8000).optional(),
});

export type ChatInput = z.infer<typeof chatInputSchema>;
export type ChatMode = z.infer<typeof chatModeSchema>;

export function getTextFromMessage(message: z.infer<typeof uiMessageSchema>) {
  return message.parts
    .filter((part) => part.type === 'text' && part.text)
    .map((part) => part.text)
    .join('');
}

export function validateMessageLength(text: string, mode: ChatMode) {
  const max = mode === 'job-fit' ? 8000 : 4000;
  return text.length <= max;
}

export const chatActionErrorSchema = z.enum([
  'rate_limited',
  'validation',
  'message_too_long',
  'chat_failed',
]);

const uiMessageChunkSchema = z.object({ type: z.string() }).passthrough();

export const chatActionResultSchema = z.discriminatedUnion('ok', [
  z.object({
    ok: z.literal(true),
    chunks: z.array(uiMessageChunkSchema).min(1),
  }),
  z.object({
    ok: z.literal(false),
    error: chatActionErrorSchema,
  }),
]);

export type ChatActionError = z.infer<typeof chatActionErrorSchema>;
export type ChatActionResult = z.infer<typeof chatActionResultSchema>;
