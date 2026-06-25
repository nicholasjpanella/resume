type FaviconSize = 32 | 180;

const shellStyles = {
  background: 'linear-gradient(135deg, #020617 0%, #0f172a 55%, #042f2e 100%)',
  border: '1px solid rgba(34, 211, 238, 0.35)',
  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
} as const;

export function faviconContent(size: FaviconSize) {
  const radius = size === 32 ? 8 : 40;
  const fontSize = size === 32 ? 15 : 72;
  const glowSize = size === 32 ? 20 : 96;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: radius,
        ...shellStyles,
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: glowSize,
          height: glowSize,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.28) 0%, transparent 70%)',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          color: '#22d3ee',
          fontSize,
          fontWeight: 700,
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          letterSpacing: '-0.04em',
          lineHeight: 1,
        }}
      >
        <span style={{ opacity: 0.95 }}>~</span>
        <span style={{ color: '#67e8f9' }}>/</span>
      </div>
    </div>
  );
}
