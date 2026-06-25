'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { GlassCard } from '../primitives/GlassCard';
import { Heading } from '../primitives/Heading';
import { Text } from '../primitives/Text';
import { accentTextClasses } from '../utils/variants';
import { cn } from '../utils/cn';

interface ExpandableCardProps {
  title: string;
  stack: string;
  blurb: string;
  detail: string;
  index?: number;
  askAboutLabel?: string;
  onAskAI?: () => void;
}

export function ExpandableCard({
  title,
  stack,
  blurb,
  detail,
  index = 0,
  askAboutLabel = 'Ask the AI about this',
  onAskAI,
}: ExpandableCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
    >
      <GlassCard
        elevation="interactive"
        className="group h-full cursor-pointer p-5"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-2">
          <Heading level="h3">{title}</Heading>
          <ChevronRight
            size={18}
            className={cn(
              'shrink-0 text-cyan-400 transition-transform',
              open && 'rotate-90',
            )}
            aria-hidden="true"
          />
        </div>
        <Text variant="mono" className="mt-1 mb-3">
          {stack}
        </Text>
        <Text variant="body">{blurb}</Text>
        <AnimatePresence>
          {open && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 overflow-hidden text-sm leading-relaxed text-slate-400"
            >
              {detail}
            </motion.p>
          )}
        </AnimatePresence>
        {onAskAI && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onAskAI();
            }}
            className={cn(
              'mt-4 inline-flex items-center gap-1 text-xs transition-colors',
              accentTextClasses,
            )}
          >
            <Sparkles size={12} aria-hidden="true" />
            {askAboutLabel}
          </button>
        )}
      </GlassCard>
    </motion.div>
  );
}
