// Language configuration and translations
export const defaultLang = 'en';
export const supportedLanguages = {
  en: 'English',
  sv: 'Svenska'
};

// Translations object
export const translations = {
  en: {
    // Meta
    title: 'Putte Arvfors — Web Analyst & Digital Troublemaker',
    description: 'Putte Arvfors — Web Analyst and Digital Troublemaker. Matomo‑first analytics, SEO/AEO/GEO, experimentation, and privacy‑first data practices (GDPR).',
    
    // Navigation
    nav: {
      about: 'About',
      work: 'Work', 
      skills: 'Skills',
      certifications: 'Certifications',
      contact: 'Contact'
    },
    
    // Hero section
    hero: {
      title: 'Web Analyst & Digital Troublemaker',
      subtitle: 'I help teams find signal in the noise—turning data into decisions with Matomo‑first analytics, experimentation, and pragmatic engineering.',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      email: 'Email'
    },
    
    // About section
    about: {
      title: 'About',
      content: `I'm Putte Arvfors, a hands-on web analyst and digital problem solver. I blend
        analytics, tagging, and experimentation with enough code to get things done
        without drama. My main weapon of choice is <strong>Matomo</strong> (Analytics + Tag Manager)
        — I also support GA4/GTM when the situation calls for it. I'm also an
        <strong>SEO/AEO/GEO</strong> pro with a <strong>privacy‑first</strong> mindset, keeping
        <abbr title="General Data Protection Regulation">GDPR</abbr> and consent at the center of how data is collected and used.`
    },
    
    // Work section
    work: {
      title: 'Selected Focus',
      cards: {
        analytics: {
          title: 'Matomo Analytics & Tagging',
          content: 'Matomo Analytics + Tag Manager, event models, migrations from UA/GA4, consent-aware tracking, and data quality.'
        },
        seo: {
          title: 'SEO, AEO & GEO',
          content: 'Technical SEO, structured data (Schema.org), Knowledge Graph/Answer Engine Optimization, and Generative Engine Optimization for AI‑overviews and LLM‑powered search.'
        },
        experimentation: {
          title: 'Experimentation',
          content: 'Hypothesis-driven A/B tests with Optimizely/VWO; guardrails and trustworthy reads.'
        },
        dataops: {
          title: 'Data Ops',
          content: 'Pipelines, dashboards, and durable metrics — from collection to reporting.'
        },
        engineering: {
          title: 'Web Engineering',
          content: 'Tagging, performance, debugging, and light automation with JS/Python/Docker.'
        },
        privacy: {
          title: 'Privacy & Compliance',
          content: 'Consent strategy, data minimization, cookieless signals, and GDPR/ePrivacy alignment without killing insights.'
        }
      }
    },
    
    // Skills section
    skills: {
      title: 'Skills Snapshot'
    },
    
    // Certifications section
    certifications: {
      title: 'Certifications',
      subtitle: 'Selected credentials reflecting my focus on analytics, experimentation, and privacy‑respecting data.'
    },
    
    // Contact section
    contact: {
      title: 'Contact',
      content: 'Best way to reach me is via LinkedIn, email, or GitHub.',
      linkedinBtn: 'Message on LinkedIn',
      githubBtn: 'Follow on GitHub',
      emailBtn: 'Email me'
    },
    
    // Footer
    footer: {
      copyright: 'Putte Arvfors • Built with Nginx + Docker'
    },
    
    // Theme toggle
    theme: {
      auto: 'Theme: Auto',
      light: 'Theme: Light', 
      dark: 'Theme: Dark'
    }
  },
  
  sv: {
    // Meta
    title: 'Putte Arvfors — Webbanalytiker & Digital Problemlösare',
    description: 'Putte Arvfors — Webbanalytiker och Digital Problemlösare. Matomo-fokuserad analys, SEO/AEO/GEO, experimentering och integritetsfokuserad datahantering (GDPR).',
    
    // Navigation
    nav: {
      about: 'Om',
      work: 'Arbete',
      skills: 'Färdigheter', 
      certifications: 'Certifieringar',
      contact: 'Kontakt'
    },
    
    // Hero section
    hero: {
      title: 'Webbanalytiker & Digital Problemlösare',
      subtitle: 'Jag hjälper team att hitta signaler i bruset—omvandlar data till beslut med Matomo-fokuserad analys, experimentering och pragmatisk teknik.',
      linkedin: 'LinkedIn',
      github: 'GitHub', 
      email: 'E-post'
    },
    
    // About section
    about: {
      title: 'Om mig',
      content: `Jag är Putte Arvfors, en praktisk webbanalytiker och digital problemlösare. Jag blandar
        analys, taggning och experimentering med tillräckligt med kod för att få saker gjorda
        utan drama. Mitt främsta vapen är <strong>Matomo</strong> (Analytics + Tag Manager)
        — jag stödjer även GA4/GTM när situationen kräver det. Jag är också en
        <strong>SEO/AEO/GEO</strong>-proffs med en <strong>integritetsfokuserad</strong> inställning som håller
        <abbr title="General Data Protection Regulation">GDPR</abbr> och samtycke i centrum för hur data samlas in och används.`
    },
    
    // Work section  
    work: {
      title: 'Utvalda Fokusområden',
      cards: {
        analytics: {
          title: 'Matomo Analytics & Taggning',
          content: 'Matomo Analytics + Tag Manager, eventmodeller, migreringar från UA/GA4, samtyckesmedveten spårning och datakvalitet.'
        },
        seo: {
          title: 'SEO, AEO & GEO', 
          content: 'Teknisk SEO, strukturerad data (Schema.org), Knowledge Graph/Answer Engine Optimization, och Generative Engine Optimization för AI-överblickar och LLM-driven sökning.'
        },
        experimentation: {
          title: 'Experimentering',
          content: 'Hypotesdrivna A/B-tester med Optimizely/VWO; skyddsräcken och tillförlitliga avläsningar.'
        },
        dataops: {
          title: 'Data Ops',
          content: 'Pipelines, dashboards och hållbara mätvärden — från insamling till rapportering.'
        },
        engineering: {
          title: 'Webbteknik',
          content: 'Taggning, prestanda, felsökning och lätt automation med JS/Python/Docker.'
        },
        privacy: {
          title: 'Integritet & Regelefterlevnad',
          content: 'Samtyckestrategi, dataminimering, cookieless signaler och GDPR/ePrivacy-anpassning utan att döda insikter.'
        }
      }
    },
    
    // Skills section
    skills: {
      title: 'Färdighetsöversikt'
    },
    
    // Certifications section
    certifications: {
      title: 'Certifieringar',
      subtitle: 'Utvalda legitimationer som speglar mitt fokus på analys, experimentering och integritetsrespekterande data.'
    },
    
    // Contact section
    contact: {
      title: 'Kontakt',
      content: 'Bästa sättet att nå mig är via LinkedIn, e-post eller GitHub.',
      linkedinBtn: 'Meddelande på LinkedIn',
      githubBtn: 'Följ på GitHub',
      emailBtn: 'Mejla mig'
    },
    
    // Footer
    footer: {
      copyright: 'Putte Arvfors • Byggd med Nginx + Docker'
    },
    
    // Theme toggle
    theme: {
      auto: 'Tema: Automatisk',
      light: 'Tema: Ljust',
      dark: 'Tema: Mörkt'
    }
  }
};

// Get translation for a key path (e.g., 'hero.title')
export function getTranslation(lang, keyPath) {
  return keyPath.split('.').reduce((obj, key) => obj?.[key], translations[lang]) || translations[defaultLang][keyPath];
}

// Get browser language preference
export function detectLanguage() {
  if (typeof navigator === 'undefined') return defaultLang;
  
  const browserLang = navigator.language || navigator.languages?.[0];
  if (!browserLang) return defaultLang;
  
  const langCode = browserLang.split('-')[0].toLowerCase();
  return supportedLanguages[langCode] ? langCode : defaultLang;
}