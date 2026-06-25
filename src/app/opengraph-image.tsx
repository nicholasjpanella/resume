import { ImageResponse } from 'next/og';
import { PROFILE } from '@/lib/resume/data';

export const runtime = 'edge';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: '64px',
          background: 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #042f2e 100%)',
          color: '#f1f5f9',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '22px',
            color: '#22d3ee',
            fontFamily: 'monospace',
          }}
        >
          <span>~/</span>
          <span>nicholas.panella</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignSelf: 'flex-start',
              padding: '8px 16px',
              borderRadius: '999px',
              border: '1px solid rgba(34, 211, 238, 0.35)',
              background: 'rgba(34, 211, 238, 0.12)',
              color: '#67e8f9',
              fontSize: '20px',
            }}
          >
            {PROFILE.availability}
          </div>
          <div style={{ fontSize: '72px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            {PROFILE.name}
          </div>
          <div style={{ fontSize: '36px', color: '#94a3b8' }}>{PROFILE.title}</div>
          <div style={{ fontSize: '28px', color: '#cbd5e1', maxWidth: '900px', lineHeight: 1.4 }}>
            {PROFILE.tagline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
