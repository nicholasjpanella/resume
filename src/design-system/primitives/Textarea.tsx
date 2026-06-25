import type { TextareaHTMLAttributes } from 'react';
import { inputVariants } from '../utils/variants';
import { cn } from '../utils/cn';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, rows = 6, ...props }: TextareaProps) {
  return (
    <textarea className={cn(inputVariants.textarea, className)} rows={rows} {...props} />
  );
}
