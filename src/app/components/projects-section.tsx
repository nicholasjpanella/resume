'use client';

import { Layers } from 'lucide-react';
import {
  ExpandableCard,
  gridProjectsClasses,
  SectionHeader,
  sectionSpacingClasses,
} from '@/design-system';
import { PROJECTS, SITE_COPY } from '@/lib/resume/data';
import { trackEvent } from '@/lib/analytics';

interface ProjectsSectionProps {
  onAskAI: (prompt: string) => void;
}

export function ProjectsSection({ onAskAI }: ProjectsSectionProps) {
  return (
    <section className={sectionSpacingClasses()}>
      <SectionHeader icon={Layers} title={SITE_COPY.sections.projects} className="mb-6" />
      <div className={gridProjectsClasses()}>
        {PROJECTS.map((project, index) => (
          <ExpandableCard
            key={project.title}
            title={project.title}
            stack={project.stack}
            blurb={project.blurb}
            detail={project.detail}
            index={index}
            askAboutLabel={SITE_COPY.chat.askAboutThis}
            onAskAI={() => {
              trackEvent('project_ask_ai');
              onAskAI(`Tell me about the ${project.title}`);
              document.getElementById('assistant')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        ))}
      </div>
    </section>
  );
}
