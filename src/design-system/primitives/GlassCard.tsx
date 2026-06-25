import type { HTMLAttributes, ReactNode } from 'react';
import { glass, type GlassElevation } from '../utils/variants';
import { cn } from '../utils/cn';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: GlassElevation;
  children: ReactNode;
}

export function GlassCard({
  elevation = 'surface',
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div className={cn(glass[elevation], className)} {...props}>
      {children}
    </div>
  );
}
