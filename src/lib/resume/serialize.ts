import {
  EDUCATION,
  METRICS,
  METRICS_SECTION,
  PROFILE,
  PROJECTS,
  SKILLS,
  TIMELINE,
} from './data';

export function serializeResumeData() {
  return JSON.stringify(
    {
      profile: PROFILE,
      metrics: {
        context: METRICS_SECTION.description,
        items: METRICS.map(({ label, value }) => ({ label, value })),
      },
      projects: PROJECTS,
      timeline: TIMELINE,
      skills: SKILLS.map(({ group, items }) => ({ group, items })),
      education: EDUCATION,
    },
    null,
    2,
  );
}
