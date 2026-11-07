/**
 * Site configuration
 * Centralized decisions from audit remediation (D1-D7)
 */

export const siteConfig = {
  /**
   * D1: Priority order
   * 1. Work and case studies
   * 2. Professional positioning
   * 3. Contact
   * 4. Blog as reinforcement
   * 5. Products only when real
   */
  priority: ['work', 'positioning', 'contact', 'blog', 'products'] as const,

  /**
   * D2: Products feature flag
   * When false: no Home section, no nav/footer links, routes call notFound()
   */
  features: {
    products: false,
    blog: true,
    about: true,
  },

  /**
   * D3: CTAs
   * Header: no primary CTA pill
   * Hero primary: "View case studies" → /work
   * Hero secondary: "Get in touch" → /contact
   * Closing: ONE CTA with real destination
   */
  ctas: {
    header: null,
    hero: {
      primary: { label: 'View case studies', href: '/work' },
      secondary: { label: 'Get in touch', href: '/contact' },
    },
    closing: {
      primary: { label: 'Get in touch', href: '/contact' },
    },
  },

  /**
   * D4: Contact implementation
   * mailto: button + copy-email button + social links
   * No backend, no form
   */
  contact: {
    email: 'enmanuelnunezmatias@gmail.com',
    social: [
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/enmanuel-nunez-matias-249560340/',
        icon: 'linkedin',
      },
      { label: 'GitHub', url: 'https://github.com/mxnueh', icon: 'github' },
      { label: 'Discord', username: 'm4ti_', icon: 'discord' },
    ],
  },

  /**
   * D5: CV link
   * Render "Download CV" only if cvUrl is set AND file exists in /public
   */
  cvUrl: undefined as string | undefined, // Set to '/cv.pdf' when file exists

  /**
   * D6: Localization
   * Complete native localization for Spanish
   * If i18n check fails: locales = ['en'], hide switcher, remove ES from sitemap
   */
  locales: ['en', 'es'] as const,
  defaultLocale: 'en' as const,

  /**
   * D7: About page
   * Build minimal page from: bio, timeline, certifications, toolbox, working method
   * If incomplete: remove from nav
   */
  about: {
    enabled: true, // Set to false to remove from nav
  },

  /**
   * Site metadata
   */
  name: 'Enmanuel Nunez Matias',
  title: 'Full Stack Developer & Systems Designer',
  description:
    'Full Stack Developer and Systems Designer from Santo Domingo, DR. Specializing in telemetry systems, web applications, and IoT solutions with React, TypeScript, Python, and PostgreSQL.',
  url: 'https://enmanuelnunez.dev', // Update when domain is set
  author: {
    name: 'Enmanuel Nunez Matias',
    role: 'Full Stack Developer & Systems Designer',
    location: 'Santo Domingo, Dominican Republic',
    education: 'Software Development at ITLA',
    language: 'English B2',
  },
} as const;

export type SiteConfig = typeof siteConfig;
