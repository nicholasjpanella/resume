import type { HTMLAttributes, ReactNode } from 'react';
import { textVariants, type TextVariant } from '../utils/variants';
import { cn } from '../utils/cn';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  children: ReactNode;
}

export function Text({ variant = 'body', className, children, ...props }: TextProps) {
  return (
    <p className={cn(textVariants[variant], className)} {...props}>
      {children}
    </p>
  );
}
