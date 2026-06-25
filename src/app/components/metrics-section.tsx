'use client';

import { Zap } from 'lucide-react';
import {
  gridMetricsClasses,
  MetricCard,
  SectionHeader,
  Text,
  sectionSpacingClasses,
} from '@/design-system';
import { METRICS, METRICS_SECTION } from '@/lib/resume/data';

export function MetricsSection() {
  return (
    <section className={sectionSpacingClasses()}>
      <SectionHeader icon={Zap} title={METRICS_SECTION.title} />
      <Text variant="muted" className="mb-4 max-w-2xl">
        {METRICS_SECTION.description}
      </Text>
      <div className={gridMetricsClasses()}>
        {METRICS.map((metric, index) => (
          <MetricCard
            key={metric.label}
            icon={metric.icon}
            value={metric.value}
            label={metric.label}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
