import { track } from '@vercel/analytics/server';
import type { AnalyticsEvent, AnalyticsProperties } from '@/lib/analytics/events';

export async function trackServerEvent<E extends AnalyticsEvent>(
  event: E,
  properties?: AnalyticsProperties<E>,
) {
  await track(event, properties);
}
