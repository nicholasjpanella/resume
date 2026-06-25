import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-url';

const aiCrawlers = [
  'GPTBot',
  'Google-Extended',
  'ClaudeBot',
  'PerplexityBot',
  'CCBot',
  'Bytespider',
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/'] as string[],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
