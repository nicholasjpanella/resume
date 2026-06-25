import { cn } from './cn';

/** Matches starter-file.jsx Glass component exactly */
const glassBase = 'backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl';

export const glass = {
  surface: glassBase,
  elevated: cn(glassBase, 'shadow-lg shadow-black/20'),
  interactive: cn(glassBase, 'transition-colors hover:bg-white/[0.07]'),
  inset: 'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl',
} as const;

export type GlassElevation = keyof typeof glass;

export const buttonVariants = {
  primary:
    'inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-500/20 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
  ghost:
    'inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-slate-100 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
  icon: 'inline-flex items-center justify-center rounded-xl text-slate-400 transition-colors hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
  send: 'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

export const badgeVariants = {
  status:
    'inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300',
} as const;

export type BadgeVariant = keyof typeof badgeVariants;

export const chipVariants = {
  interactive:
    'rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer',
  static:
    'rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300',
} as const;

export type ChipVariant = keyof typeof chipVariants;

export const textVariants = {
  body: 'text-sm leading-relaxed text-slate-300',
  muted: 'text-sm leading-relaxed text-slate-400',
  label: 'text-xs text-slate-400',
  mono: 'font-mono text-xs text-cyan-300/80',
  gradient:
    'bg-linear-to-r from-cyan-300 to-violet-300 bg-clip-text font-semibold text-transparent',
} as const;

export type TextVariant = keyof typeof textVariants;

export const headingVariants = {
  h1: 'text-4xl font-bold leading-tight tracking-tight text-slate-100 sm:text-6xl',
  h2: 'text-2xl font-bold text-slate-100',
  h3: 'text-lg font-semibold leading-snug text-slate-100',
} as const;

export type HeadingLevel = keyof typeof headingVariants;

export const inputVariants = {
  default:
    'w-full bg-transparent px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus-visible:ring-0',
  textarea:
    'w-full resize-y rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 backdrop-blur-xl focus-visible:ring-2 focus-visible:ring-cyan-400',
} as const;

export const chatBubbleVariants = {
  user: 'max-w-md rounded-2xl border border-violet-400/20 bg-violet-500/15 px-4 py-3 text-sm leading-relaxed text-slate-100',
  assistant:
    'max-w-lg rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-relaxed text-slate-100 sm:max-w-xl',
} as const;

export type ChatBubbleRole = keyof typeof chatBubbleVariants;

export const avatarVariants = {
  user: 'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-300',
  assistant:
    'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300',
} as const;

export const chatInputBarClasses =
  'flex items-center gap-2 border-t border-white/10 bg-black/20 p-3';

export const chatMarkdownClasses = cn(
  'text-sm leading-relaxed text-slate-200',
  '[&>*:first-child]:mt-0 [&>*:last-child]:mb-0',
  '[&_p]:mb-2 [&_p:last-child]:mb-0',
  '[&_strong]:font-semibold [&_strong]:text-slate-100',
  '[&_ul]:mb-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-4',
  '[&_ol]:mb-2 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-4',
  '[&_li]:leading-relaxed',
  '[&_a]:text-cyan-400 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-cyan-300',
  '[&_code]:rounded [&_code]:bg-white/10 [&_code]:px-1 [&_code]:font-mono [&_code]:text-xs [&_code]:text-cyan-300',
  '[&_h3]:mb-2 [&_h3]:mt-3 [&_h3]:font-semibold [&_h3]:text-slate-100',
  '[&_h4]:mb-1 [&_h4]:mt-2 [&_h4]:font-semibold [&_h4]:text-slate-100',
);

export const contactCardClasses =
  'bg-linear-to-br from-cyan-500/10 to-violet-500/10';

export const sectionIconClasses = 'text-cyan-400';

export const accentTextClasses = 'text-cyan-400 hover:text-cyan-300';

export const motionVariants = {
  fadeUp:
    'motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-reduce:animate-none',
  pulse: 'motion-safe:animate-pulse motion-reduce:animate-none',
} as const;

export function pageShellClasses() {
  return cn(
    'relative min-h-screen w-full bg-slate-950 font-sans text-slate-100 selection:bg-cyan-400/30',
  );
}

export function pageContainerClasses() {
  return cn('relative z-10 mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-16');
}

export function sectionSpacingClasses() {
  return cn('mb-20');
}

export function gridMetricsClasses() {
  return cn('grid grid-cols-2 gap-3 sm:grid-cols-4');
}

export function gridProjectsClasses() {
  return cn('grid gap-4 sm:grid-cols-2');
}

export function gridSkillsClasses() {
  return cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-3');
}

export function footerClasses() {
  return cn('text-center font-mono text-xs text-slate-600');
}
