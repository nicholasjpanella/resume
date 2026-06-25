import type { HTMLAttributes, ReactNode } from 'react';
import { headingVariants, type HeadingLevel } from '../utils/variants';
import { cn } from '../utils/cn';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  children: ReactNode;
}

const tags = { h1: 'h1', h2: 'h2', h3: 'h3' } as const;

export function Heading({ level = 'h2', className, children, ...props }: HeadingProps) {
  const Tag = tags[level];
  return (
    <Tag className={cn(headingVariants[level], className)} {...props}>
      {children}
    </Tag>
  );
}
