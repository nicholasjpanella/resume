import type { HTMLAttributes, ReactNode } from 'react';
import { badgeVariants, type BadgeVariant } from '../utils/variants';
import { cn } from '../utils/cn';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

export function Badge({ variant = 'status', className, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants[variant], className)} {...props}>
      {children}
    </span>
  );
}
