import type { LucideIcon } from 'lucide-react';
import { Heading } from '../primitives/Heading';
import { sectionIconClasses } from '../utils/variants';
import { cn } from '../utils/cn';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  className?: string;
}

export function SectionHeader({ icon: Icon, title, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-5 flex items-center gap-2', className)}>
      <Icon className={sectionIconClasses} size={20} aria-hidden="true" />
      <Heading level="h2">{title}</Heading>
    </div>
  );
}
