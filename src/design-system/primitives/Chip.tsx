import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { chipVariants } from '../utils/variants';
import { cn } from '../utils/cn';

interface ChipButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'interactive';
  children: ReactNode;
}

interface ChipStaticProps {
  variant: 'static';
  children: ReactNode;
  className?: string;
}

type ChipProps = ChipButtonProps | ChipStaticProps;

export function Chip(props: ChipProps) {
  if (props.variant === 'static') {
    const { children, className } = props;
    return <span className={cn(chipVariants.static, className)}>{children}</span>;
  }

  const {
    variant = 'interactive',
    className,
    children,
    type = 'button',
    ...buttonProps
  } = props;

  return (
    <button type={type} className={cn(chipVariants[variant], className)} {...buttonProps}>
      {children}
    </button>
  );
}
