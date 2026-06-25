'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { GlassCard } from '../primitives/GlassCard';
import { Heading } from '../primitives/Heading';
import { Text } from '../primitives/Text';

interface TimelineCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  index?: number;
}

export function TimelineCard({
  company,
  role,
  period,
  location,
  points,
  index = 0,
}: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <GlassCard className="p-6">
        <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
          <Heading level="h3">{company}</Heading>
          <Text variant="mono">{period}</Text>
        </div>
        <Text variant="body" className="mb-4">
          {role} · <span className="text-slate-500">{location}</span>
        </Text>
        <ul className="space-y-2">
          {points.map((pt) => (
            <li key={pt} className="flex gap-2 text-sm leading-relaxed text-slate-400">
              <ChevronRight
                size={16}
                className="mt-0.5 shrink-0 text-cyan-400/60"
                aria-hidden="true"
              />
              {pt}
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  );
}
