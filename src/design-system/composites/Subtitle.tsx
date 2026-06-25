import { textVariants } from '../utils/variants';
import { cn } from '../utils/cn';

interface SubtitleProps {
  children: string;
  className?: string;
}

export function Subtitle({ children, className }: SubtitleProps) {
  return (
    <p className={cn(textVariants.gradient, 'mt-3 text-xl sm:text-2xl', className)}>
      {children}
    </p>
  );
}
