import { EDUCATION, PROFILE, SKILLS, TIMELINE } from '@/lib/resume/data';
import { profileUrl, SITE_NAME, SITE_URL } from '@/lib/site';

function buildJsonLd() {
  const currentRole = TIMELINE[0];
  const knowsAbout = SKILLS.flatMap((group) => group.items);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: `${PROFILE.tagline} ${PROFILE.availability}.`,
        inLanguage: 'en-US',
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: PROFILE.name,
        jobTitle: PROFILE.title,
        url: SITE_URL,
        email: PROFILE.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Tampa',
          addressRegion: 'FL',
          addressCountry: 'US',
        },
        sameAs: [profileUrl(PROFILE.github), profileUrl(PROFILE.linkedin)],
        worksFor: {
          '@type': 'Organization',
          name: currentRole.company,
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: EDUCATION.school,
        },
        knowsAbout,
      },
    ],
  };
}

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
    />
  );
}
