import { siteConfig } from '@/config/site';

export function getGmailComposeUrl(body = '') {
  const { email, subject } = siteConfig.contact;
  const gmail = new URL('https://mail.google.com/mail/');
  gmail.search = new URLSearchParams({ view: 'cm', fs: '1', to: email, su: subject, body }).toString();
  return gmail.href;
}
