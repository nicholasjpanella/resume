export class ChatRateLimitError extends Error {
  constructor(message = 'Rate limit exceeded') {
    super(message);
    this.name = 'ChatRateLimitError';
  }
}
