import { GraduationCap } from 'lucide-react';
import {
  GlassCard,
  Heading,
  SectionHeader,
  sectionSpacingClasses,
  Text,
} from '@/design-system';
import { EDUCATION, SITE_COPY } from '@/lib/resume/data';

export function EducationSection() {
  return (
    <section className={sectionSpacingClasses()}>
      <SectionHeader icon={GraduationCap} title={SITE_COPY.sections.education} className="mb-6" />
      <GlassCard className="p-5">
        <Heading level="h3">{EDUCATION.school}</Heading>
        <Text variant="body" className="mt-1">
          {EDUCATION.degree}
        </Text>
        <Text variant="muted" className="mt-2">
          {EDUCATION.period}
          {EDUCATION.note ? ` · ${EDUCATION.note}` : ''}
        </Text>
      </GlassCard>
    </section>
  );
}
