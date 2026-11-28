import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { CopyEmailButton } from '@/components/CopyEmailButton';
import { GlobalNav } from '@/components/GlobalNav';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { Section } from '@/components/Section';
import { SiteFooter } from '@/components/SiteFooter';
import { siteConfig } from '@/config/site';
import { getGmailComposeUrl } from '@/lib/gmail';
import { getContent } from '@/lib/getContent';
import type { Language } from '@/lib/types';

export function ContactPage({ lang }: { lang: Language }) {
  const { contact, contactDetails } = getContent(lang);
  const { email, profiles, discord } = siteConfig.contact;

  return (
    <div className="flex min-h-screen flex-col bg-white text-text-primary dark:bg-[#0c0c0e] dark:text-white">
      <GlobalNav lang={lang} />

      <main className="flex-1">
        <Section className="dark:bg-[#0c0c0e]">
          <div className="mx-auto max-w-2xl text-text-primary dark:text-white">
            <h1 className="heading-ink mb-3 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-5xl">
              {contact.headline}
            </h1>
            <p className="mb-7 text-text-secondary dark:text-gray-300">{contact.intro}</p>
            <ContactForm copy={contact} />

            <section aria-labelledby="contact-details" className="mt-12">
              <h2 id="contact-details" className="mb-4 text-xl font-semibold tracking-tight">
                {contactDetails.heading}
              </h2>
              <div className="rounded-large border border-black/10 bg-bg-alt p-4 sm:p-7 dark:border-white/15 dark:bg-[#161617]">
                <p className="mb-4 wrap-anywhere text-base font-medium sm:text-lg">{email}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={getGmailComposeUrl()}
                    className="portfolio-button portfolio-button-primary"
                  >
                    <Mail size={16} aria-hidden="true" />
                    {contactDetails.openGmail}
                  </a>
                  <CopyEmailButton labels={contactDetails} />
                </div>
              </div>

              <ul className="mt-3 grid gap-3 sm:grid-cols-3">
                {profiles.map(({ label, url }) => {
                  const Icon = label === 'GitHub' ? GithubIcon : LinkedinIcon;
                  return (
                    <li key={label}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-button h-full w-full justify-start"
                      >
                        <Icon className="size-4 shrink-0" aria-hidden="true" />
                        {label}
                        <ArrowUpRight className="ml-auto size-4 shrink-0" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
                <li className="flex items-center gap-2 rounded-small border border-black/10 px-3 py-2 text-sm dark:border-white/15">
                  <MessageSquare size={16} className="shrink-0" aria-hidden="true" />
                  <span className="font-medium">Discord</span>
                  <span className="ml-auto font-mono text-text-secondary dark:text-gray-300">@{discord}</span>
                </li>
              </ul>
            </section>
          </div>
        </Section>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
