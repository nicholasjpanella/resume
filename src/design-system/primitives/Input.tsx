import type { InputHTMLAttributes } from 'react';
import { inputVariants } from '../utils/variants';
import { cn } from '../utils/cn';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return <input className={cn(inputVariants.default, className)} {...props} />;
}
