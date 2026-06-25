import { Activity } from 'lucide-react';
import { SectionHeader, sectionSpacingClasses, TimelineCard } from '@/design-system';
import { SITE_COPY, TIMELINE } from '@/lib/resume/data';

export function ExperienceSection() {
  return (
    <section className={sectionSpacingClasses()}>
      <SectionHeader icon={Activity} title={SITE_COPY.sections.experience} className="mb-6" />
      <div className="space-y-4">
        {TIMELINE.map((job, index) => (
          <TimelineCard key={job.company} {...job} index={index} />
        ))}
      </div>
    </section>
  );
}
