import { Badge } from '../primitives/Badge';

interface StatusBadgeProps {
  children: React.ReactNode;
}

export function StatusBadge({ children }: StatusBadgeProps) {
  return (
    <Badge>
      <span className="h-2 w-2 rounded-full bg-cyan-400 motion-safe:animate-pulse motion-reduce:animate-none" />
      {children}
    </Badge>
  );
}
