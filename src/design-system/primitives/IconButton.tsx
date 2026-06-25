import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { buttonVariants } from '../utils/variants';
import { cn } from '../utils/cn';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label': string;
  children: ReactNode;
}

export function IconButton({ className, children, ...props }: IconButtonProps) {
  return (
    <button type="button" className={cn(buttonVariants.icon, className)} {...props}>
      {children}
    </button>
  );
}
