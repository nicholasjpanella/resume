'use client';

import { track } from '@vercel/analytics';
import type { AnalyticsEvent, AnalyticsProperties } from '@/lib/analytics/events';

export type { AnalyticsEvent, AnalyticsProperties } from '@/lib/analytics/events';

export function trackEvent<E extends AnalyticsEvent>(
  event: E,
  properties?: AnalyticsProperties<E>,
) {
  track(event, properties);
}
