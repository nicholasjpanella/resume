import { ArrowRight, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import {
  Button,
  Heading,
  StatusBadge,
  Subtitle,
  Text,
  sectionSpacingClasses,
} from '@/design-system';
import { PROFILE, SITE_COPY } from '@/lib/resume/data';
import { trackEvent } from '@/lib/analytics';

export function HeroSection() {
  return (
    <header className={sectionSpacingClasses()}>
      <StatusBadge>{PROFILE.availability}</StatusBadge>
      <Heading level="h1" className="mt-5">
        {PROFILE.name}
      </Heading>
      <Subtitle>{PROFILE.title}</Subtitle>
      <Text variant="body" className="mt-5 max-w-2xl text-lg">
        {PROFILE.tagline} {PROFILE.summary}
      </Text>
      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Button href="#assistant">
          <Sparkles size={18} aria-hidden="true" />
          {SITE_COPY.hero.askAi}
        </Button>
        <Button
          variant="ghost"
          href="/resume.pdf"
          download
          onClick={() => trackEvent('resume_download')}
        >
          {SITE_COPY.hero.downloadResume} <ArrowRight size={16} aria-hidden="true" />
        </Button>
      </div>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={14} aria-hidden="true" /> {PROFILE.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Mail size={14} aria-hidden="true" /> {PROFILE.email}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Phone size={14} aria-hidden="true" /> {PROFILE.phone}
        </span>
      </div>
    </header>
  );
}
