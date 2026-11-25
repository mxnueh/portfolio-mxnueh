'use client';

import type { SubmitEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getGmailComposeUrl } from '@/lib/gmail';
import type { getContent } from '@/lib/getContent';

type ContactCopy = ReturnType<typeof getContent>['contact'];

const fieldClass = 'mt-2 w-full min-w-0 rounded-small border border-separator bg-white px-3 py-2.5 text-sm text-text-primary dark:border-white/20 dark:bg-surface-dark dark:text-white';

export function ContactForm({ copy }: { copy: ContactCopy }) {
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const answers = new FormData(event.currentTarget);
    const fields = [
      ['name', copy.name],
      ['projectType', copy.projectType],
      ['timing', copy.timing],
      ['details', copy.details],
    ];
    const body = fields.flatMap(([field, label]) => {
      const answer = String(answers.get(field) ?? '').trim();
      return answer ? [`${label}\n${answer}`] : [];
    }).join('\n\n');

    window.location.assign(getGmailComposeUrl(body));
  }

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="space-y-6 rounded-large border border-black/10 bg-bg-alt p-4 sm:p-7 dark:border-white/15 dark:bg-[#161617]"
    >
      <fieldset className="min-w-0">
        <legend className="mb-3 text-sm font-semibold">{copy.projectType}</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {copy.projectTypes.map((option) => (
            <label
              key={option}
              className="flex min-h-11 cursor-pointer items-center gap-3 rounded-small border border-separator bg-white px-3 py-2 text-sm has-checked:border-accent-fill dark:border-white/20 dark:bg-surface-dark dark:has-checked:border-accent-fill"
            >
              <input type="radio" name="projectType" value={option} required className="size-4 shrink-0 accent-accent-fill" />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block text-sm font-semibold">
        {copy.details}
        <textarea
          name="details"
          required
          rows={4}
          maxLength={600}
          placeholder={copy.detailsPlaceholder}
          className={`${fieldClass} block resize-y font-normal placeholder:text-text-secondary dark:placeholder:text-gray-400`}
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="min-w-0 text-sm font-semibold">
          {copy.name}
          <input type="text" name="name" autoComplete="name" required maxLength={80} className={`${fieldClass} font-normal`} />
        </label>
        <label className="min-w-0 text-sm font-semibold">
          {copy.timing}
          <select name="timing" defaultValue="" className={`${fieldClass} font-normal`}>
            <option value="">{copy.optional}</option>
            {copy.timingOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <button
          type="submit"
          className="portfolio-button portfolio-button-primary"
        >
          {copy.submit}
          <ArrowUpRight size={16} aria-hidden="true" />
        </button>
        <p className="text-sm text-text-secondary dark:text-gray-300">{copy.submitNote}</p>
      </div>
    </form>
  );
}
