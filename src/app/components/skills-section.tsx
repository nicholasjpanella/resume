import { Terminal } from 'lucide-react';
import {
  gridSkillsClasses,
  SectionHeader,
  sectionSpacingClasses,
  SkillGroupCard,
} from '@/design-system';
import { SITE_COPY, SKILLS } from '@/lib/resume/data';

export function SkillsSection() {
  return (
    <section className={sectionSpacingClasses()}>
      <SectionHeader icon={Terminal} title={SITE_COPY.sections.skills} className="mb-6" />
      <div className={gridSkillsClasses()}>
        {SKILLS.map((skill, index) => (
          <SkillGroupCard
            key={skill.group}
            icon={skill.icon}
            group={skill.group}
            items={skill.items}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
