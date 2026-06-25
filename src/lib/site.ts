import { PROFILE, SKILLS } from '@/lib/resume/data';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nicholasjpanella.com';

export const SITE_NAME = PROFILE.name;

export const SITE_DESCRIPTION = `${PROFILE.tagline} ${PROFILE.availability}.`;

export const SITE_TITLE = `${PROFILE.name} — ${PROFILE.title}`;

export const SITE_KEYWORDS = SKILLS.flatMap((group) => group.items);

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).href;
}

export function profileUrl(path: string) {
  return `https://${path}`;
}
