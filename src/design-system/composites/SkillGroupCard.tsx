'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { GlassCard } from '../primitives/GlassCard';
import { Chip } from '../primitives/Chip';
import { Heading } from '../primitives/Heading';
import { sectionIconClasses } from '../utils/variants';

interface SkillGroupCardProps {
  icon: LucideIcon;
  group: string;
  items: string[];
  index?: number;
}

export function SkillGroupCard({ icon: Icon, group, items, index = 0 }: SkillGroupCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <GlassCard className="h-full p-5">
        <div className="mb-3 flex items-center gap-2">
          <Icon className={sectionIconClasses} size={16} aria-hidden="true" />
          <Heading level="h3" className="text-sm">
            {group}
          </Heading>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {items.map((item) => (
            <Chip key={item} variant="static">
              {item}
            </Chip>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
