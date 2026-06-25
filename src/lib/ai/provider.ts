import { createOpenAI } from '@ai-sdk/openai';

export function getModel() {
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.LLM_MODEL;

  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not configured');
  }
  if (!model) {
    throw new Error('LLM_MODEL is not configured');
  }

  const openai = createOpenAI({
    apiKey,
    baseURL: process.env.OPENAI_BASE_URL,
  });

  return openai(model);
}

export function getMaxTokens() {
  const raw = process.env.CHAT_MAX_TOKENS;
  const parsed = raw ? Number.parseInt(raw, 10) : 1024;
  return Number.isFinite(parsed) ? parsed : 1024;
}
