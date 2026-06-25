import { ImageResponse } from 'next/og';
import { faviconContent } from '@/lib/seo/favicon-mark';

export const runtime = 'edge';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(faviconContent(32), size);
}
