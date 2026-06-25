import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  ArrowRight,
  Cloud,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  Terminal,
  Zap,
} from 'lucide-react';

/**
 * Voice: site chrome (hero, sections, contact) uses first person.
 * AI layer (assistant, starters, chat UI) uses third person about Nick.
 */

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  tagline: string;
  availability: string;
  summary: string;
}

export interface Metric {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  stack: string;
  blurb: string;
  detail: string;
}

export interface TimelineEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export interface SkillGroup {
  group: string;
  icon: LucideIcon;
  items: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  note?: string;
}

export const PROFILE: Profile = {
  name: 'Nicholas Panella',
  title: 'Staff Full-Stack Engineer',
  location: 'Tampa, FL',
  email: 'nickjpanella@gmail.com',
  phone: '856.404.7471',
  github: 'github.com/nicholasjpanella',
  linkedin: 'linkedin.com/in/nicholasjp',
  tagline: 'I follow features from a database trigger all the way up to the UI they power.',
  availability: 'Open to staff / principal platform and full-stack roles',
  summary:
    'On the platform team at CoinFlip, I own cross-cutting systems — access control, audit tooling, design systems, and payment integrations across crypto wallet and ATM operations.',
};

export const METRICS_SECTION = {
  title: 'Wallet backend impact',
  description:
    'Production metrics from the non-custodial wallet I own end-to-end at CoinFlip — onramp routing, balance pipeline, and key backup.',
} as const;

export const METRICS: Metric[] = [
  { label: 'Monthly onramp volume', value: '$2M', icon: Zap },
  { label: 'Purchase events / month', value: '7,400', icon: Activity },
  { label: 'Volume growth since early 2025', value: '7x', icon: ArrowRight },
  { label: 'OTP-to-wallet completion rate', value: '93%', icon: ShieldCheck },
];

export const PROJECTS: Project[] = [
  {
    title: 'Non-custodial wallet backend',
    stack: 'Node · TypeScript · Postgres · Fireblocks',
    blurb:
      'Owned end-to-end. Multi-currency, country-scoped asset catalog backing ~1,000 monthly active wallets.',
    detail:
      'The onramp router fans multi-vendor purchase events through Hookdeck with HMAC-per-event verification, idempotent handlers, and at-least-once delivery — routing ~7,400 events/mo at ~$2M volume. The address-balance pipeline splits locked, pending, and available across Postgres materialized views. The device and key-backup flow on the Fireblocks NCW SDK lets users restore on a new phone without us ever touching their keys (~93% OTP-to-wallet completion).',
  },
  {
    title: 'Custom design system',
    stack: 'React · Next.js · Glass-morphism',
    blurb:
      'Built from scratch for the admin console — the work this very site is themed after.',
    detail:
      'Standouts: a data grid with row grouping, bulk actions, and expand/collapse, plus a form field that handles cross-field dependencies cleanly. Sheet, modal, and frame components on top, all wrapped in a glass-morphism dark theme.',
  },
  {
    title: 'Identity & access stack',
    stack: 'Stytch · Veriff · JWT · RBAC',
    blurb:
      'The most cross-cutting piece of the platform — two vendors, both runtimes, every workflow.',
    detail:
      'End-to-end Stytch magic-link auth with JWT decoding and a session-expiration modal. RBAC enforced twice: route-level on the server and permission-aware grids and actions in the console. Veriff handles KYC with an async session-void hook on identity deactivation; the identity messaging system (SMS + email lifecycle hooks) sits on the same model.',
  },
  {
    title: 'Drag-and-drop workflow builder',
    stack: 'dnd-kit · Go · Postgres',
    blurb: 'Lets product author ATM flows without code changes.',
    detail:
      'The UI sits on dnd-kit with tab-based sub-flows, drop zones, a validation error log, and an unsaved-changes guard that aggregates errors across dirty drafts. Underneath, the Postgres schema has categorized screen types and screen-linking constraints. Started as a design doc I wrote for the team.',
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    company: 'CoinFlip (formerly Olliv by CoinFlip)',
    role: 'Staff Full-Stack Engineer · Tech Lead',
    period: 'Aug 2022 — Present',
    location: 'Tampa, FL',
    points: [
      'Tech lead for the wallet, ATM operations, and rewards services; mentor engineers shipping on them.',
      'Own the wallet backend end-to-end: data model, onramp webhook router, balance pipeline, swaps, and key backup.',
      'Built the ATM operations platform — drag-and-drop workflow builder, transaction approval state machine, and app-wide RBAC.',
      'Designed the rewards and referrals system: data model, collision-safe code generation, and public APIs.',
      'On-call for the wallet on Kubernetes with dashboards and alerting on top of the observability stack.',
    ],
  },
  {
    company: 'JPMorgan Chase & Co.',
    role: 'Associate Software Engineer (promoted from Analyst, 2019)',
    period: 'Feb 2017 — Aug 2022',
    location: 'Newark, DE',
    points: [
      'Co-architected the CRM platform that won the PWM Wealth Tech Award 2022, used by hundreds of advisors.',
      'Built reactive React UIs over Spring Boot microservices, plus dashboards with inline commenting.',
      'Wrote multi-functional NPM libraries adopted by other internal front-end teams.',
      'Owned test automation and QA; contributed to a performance-improving action-based API framework.',
      'Five years in Force for Good / Code for Good — managed a dev team for a nonprofit and mentored at hackathons.',
    ],
  },
];

export const SKILLS: SkillGroup[] = [
  { group: 'Languages', icon: Terminal, items: ['Go', 'TypeScript', 'JavaScript', 'SQL'] },
  {
    group: 'Backend',
    icon: Cpu,
    items: ['Node', 'Express', 'Go', 'REST', 'Socket.IO', 'Event-driven microservices'],
  },
  {
    group: 'Frontend',
    icon: Layers,
    items: ['React', 'Next.js', 'dnd-kit', 'Custom design systems'],
  },
  { group: 'Data', icon: Database, items: ['Postgres', 'Liquibase', 'Materialized views'] },
  {
    group: 'Infra',
    icon: Cloud,
    items: ['AWS', 'Kubernetes', 'Docker', 'Helm', 'GitLab CI/CD'],
  },
  {
    group: 'Integrations',
    icon: ShieldCheck,
    items: [
      'Fireblocks',
      'Stytch',
      'Veriff',
      'Hookdeck',
      'Onramper',
      'Moonpay',
      'AppsFlyer',
      'Twilio',
    ],
  },
];

export const EDUCATION: Education = {
  school: 'Bloomsburg University of Pennsylvania',
  degree: 'B.S.B.A. in Information and Technology Management',
  period: 'Dec 2016',
  note: 'President of the Computer Science Club',
};

export const SITE_COPY = {
  sections: {
    projects: "Things I'm most proud of",
    experience: 'Experience',
    skills: 'Tools I work with',
    education: 'Education',
    assistant: {
      title: 'Interview my AI',
      disclaimer:
        "This assistant is grounded only in Nick's real resume — it won't invent credentials.",
    },
    contact: {
      headline: "Let's build something with real user impact",
      bodySuffix: 'The fastest way to reach me is email.',
    },
  },
  hero: {
    askAi: 'Ask my AI anything',
    downloadResume: 'Download résumé',
  },
  footer: 'Built with Next.js · Deployed on Vercel · AI-grounded in real experience',
  chat: {
    placeholder: 'Ask about his experience, stack, or projects…',
    jobFitLabel: 'Match a job description',
    jobFitHelper:
      "Paste a job description and the assistant will map Nick's experience against it.",
    jobFitPlaceholder: 'Paste the job description here…',
    analyzeFit: 'Analyze fit',
    backToChat: 'Back to chat',
    askAboutThis: 'Ask the AI about this',
    genericError: 'Something went wrong generating a response. Try again.',
  },
} as const;

export const STARTER_PROMPTS = [
  "What is Nick's strongest technical area?",
  'Tell me about the wallet backend',
  'Does Nick have Kubernetes experience?',
  'What roles is Nick looking for?',
] as const;

export const ASSISTANT_GREETING =
  "Hey — I'm Nick's AI. I'm grounded in his real resume, so ask me anything about his work, his stack, or what he's after next.";

export const RATE_LIMIT_MESSAGE =
  "You've hit the message limit for now — email nickjpanella@gmail.com directly.";

export const OUT_OF_SCOPE_TEMPLATE =
  "I'm grounded only in Nick's professional background, so I don't have that detail. Try asking about the wallet backend, his design system, the identity and access stack, his infra experience, or what roles he's looking for — or reach out directly at nickjpanella@gmail.com.";

export function contactBody(availability: string) {
  return `${availability}. ${SITE_COPY.sections.contact.bodySuffix}`;
}
