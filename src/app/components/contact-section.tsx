import { Linkedin, Mail } from 'lucide-react';
import { Button, GlassCard, Heading, Text, contactCardClasses, sectionSpacingClasses } from '@/design-system';
import { contactBody, PROFILE, SITE_COPY } from '@/lib/resume/data';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/design-system/utils/cn';

export function ContactSection() {
  return (
    <section className={sectionSpacingClasses()}>
      <GlassCard className={cn('p-8 text-center', contactCardClasses)}>
        <Heading level="h2" className="mb-2">
          {SITE_COPY.sections.contact.headline}
        </Heading>
        <Text variant="muted" className="mx-auto mb-6 max-w-md">
          {contactBody(PROFILE.availability)}
        </Text>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            href={`mailto:${PROFILE.email}`}
            onClick={() => trackEvent('contact_email_click')}
          >
            <Mail size={18} aria-hidden="true" /> {PROFILE.email}
          </Button>
          <Button
            variant="ghost"
            href={`https://${PROFILE.linkedin}`}
            onClick={() => trackEvent('contact_linkedin_click')}
          >
            <Linkedin size={18} aria-hidden="true" /> LinkedIn
          </Button>
        </div>
      </GlassCard>
    </section>
  );
}
