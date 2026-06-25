import { ImageResponse } from 'next/og';
import { faviconContent } from '@/lib/seo/favicon-mark';

export const runtime = 'edge';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(faviconContent(180), size);
}
