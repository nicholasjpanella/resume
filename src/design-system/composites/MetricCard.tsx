'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { GlassCard } from '../primitives/GlassCard';
import { Text } from '../primitives/Text';

interface MetricCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  index?: number;
}

export function MetricCard({ icon: Icon, value, label, index = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <GlassCard className="h-full p-4">
        <Icon className="mb-2 text-cyan-400" size={18} aria-hidden="true" />
        <div className="text-2xl font-bold text-slate-100">{value}</div>
        <Text variant="label" className="mt-1 leading-snug">
          {label}
        </Text>
      </GlassCard>
    </motion.div>
  );
}
