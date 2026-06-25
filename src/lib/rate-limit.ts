import { checkRateLimit } from '@vercel/firewall';

const RATE_LIMIT_ID = 'chat-messages';

export function getClientIP(h: Headers) {
  return h.get('x-forwarded-for')?.split(',')[0]?.trim() ?? h.get('x-real-ip') ?? '127.0.0.1';
}

export async function checkChatRateLimit(h: Headers) {
  if (process.env.NODE_ENV === 'development') {
    return { rateLimited: false };
  }

  const ip = getClientIP(h);
  return checkRateLimit(RATE_LIMIT_ID, { rateLimitKey: ip });
}
