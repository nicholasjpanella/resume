'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { PROFILE } from '@/lib/resume/data';

const navLinkClasses =
  'text-slate-400 transition-colors hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400';

export function NavSection() {
  return (
    <nav className="mb-12 flex items-center justify-between">
      <div className="flex items-center gap-2 font-mono text-sm tracking-tight">
        <span className="text-cyan-400">~/</span>
        <span className="font-semibold text-slate-100">nicholas.panella</span>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href={`https://${PROFILE.github}`}
          aria-label="GitHub profile"
          className={navLinkClasses}
          onClick={() => trackEvent('nav_github_click')}
        >
          <Github size={18} />
        </Link>
        <Link
          href={`https://${PROFILE.linkedin}`}
          aria-label="LinkedIn profile"
          className={navLinkClasses}
          onClick={() => trackEvent('nav_linkedin_click')}
        >
          <Linkedin size={18} />
        </Link>
        <Link
          href={`mailto:${PROFILE.email}`}
          aria-label="Email Nick"
          className={navLinkClasses}
          onClick={() => trackEvent('nav_email_click')}
        >
          <Mail size={18} />
        </Link>
      </div>
    </nav>
  );
}
