'use client';

import { useRef } from 'react';
import {
  AmbientBackground,
  footerClasses,
  pageContainerClasses,
  pageShellClasses,
} from '@/design-system';
import { AssistantSection, type AssistantSectionHandle } from './assistant-section';
import { ContactSection } from './contact-section';
import { EducationSection } from './education-section';
import { ExperienceSection } from './experience-section';
import { HeroSection } from './hero-section';
import { MetricsSection } from './metrics-section';
import { NavSection } from './nav-section';
import { ProjectsSection } from './projects-section';
import { SkillsSection } from './skills-section';
import { SITE_COPY } from '@/lib/resume/data';

export function HomePage() {
  const assistantRef = useRef<AssistantSectionHandle>(null);

  return (
    <div className={pageShellClasses()}>
      <AmbientBackground />
      <div className={pageContainerClasses()}>
        <NavSection />
        <HeroSection />
        <MetricsSection />
        <AssistantSection ref={assistantRef} />
        <ProjectsSection onAskAI={(prompt) => assistantRef.current?.ask(prompt)} />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
        <footer className={footerClasses()}>
          {SITE_COPY.footer}
        </footer>
      </div>
    </div>
  );
}
