export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl motion-reduce:opacity-50" />
      <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl motion-reduce:opacity-50" />
      <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl motion-reduce:opacity-50" />
    </div>
  );
}
