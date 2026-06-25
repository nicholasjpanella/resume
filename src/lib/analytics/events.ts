export type AnalyticsEvent =
  | 'chat_message_sent'
  | 'chat_starter_clicked'
  | 'job_fit_submit'
  | 'project_ask_ai'
  | 'resume_download'
  | 'contact_email_click'
  | 'contact_linkedin_click'
  | 'nav_github_click'
  | 'nav_linkedin_click'
  | 'nav_email_click'
  | 'chat_mode_changed'
  | 'chat_error'
  | 'chat_rate_limited'
  | 'chat_response_success'
  | 'chat_response_failed';

export type AnalyticsEventProperties = {
  chat_mode_changed: { mode: 'chat' | 'job-fit' };
  chat_response_success: { mode: 'chat' | 'job-fit' };
  chat_response_failed: { mode: 'chat' | 'job-fit'; error: string };
};

export type AnalyticsProperties<E extends AnalyticsEvent> = E extends keyof AnalyticsEventProperties
  ? AnalyticsEventProperties[E]
  : Record<string, never>;
