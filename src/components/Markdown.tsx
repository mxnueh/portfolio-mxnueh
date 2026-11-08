'use client';

import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  const components: Components = {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-12 mb-6 text-text-primary dark:text-white">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-12 mb-4 text-text-primary dark:text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold tracking-tight mt-8 mb-3 text-text-primary dark:text-white">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base md:text-[17px] text-text-secondary dark:text-[#a1a1a6] mb-6 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside ml-6 text-base md:text-[17px] text-text-secondary dark:text-[#a1a1a6] mb-6 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 text-base md:text-[17px] text-text-secondary dark:text-[#a1a1a6] mb-6 space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
    hr: () => <hr className="my-10 border-0 h-px bg-black/[0.08] dark:bg-white/[0.1]" />,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-accent-fill pl-5 py-2 my-6 italic text-text-secondary dark:text-[#a1a1a6] bg-black/[0.02] dark:bg-white/[0.03] rounded-r-lg">
        {children}
      </blockquote>
    ),
    code: ({ children, className }) => {
      const match = /language-(\w+)/.exec(className || '');
      const lang = match ? match[1] : '';
      
      if (lang) {
        return (
          <SyntaxHighlighter language={lang} style={oneDark} className="rounded-xl my-6 border border-black/[0.08] dark:border-white/[0.1] text-sm">
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        );
      }
      return (
        <code className="bg-black/[0.05] dark:bg-white/[0.1] px-2 py-0.5 rounded text-[13px] font-mono text-text-primary dark:text-white border border-black/[0.06] dark:border-white/[0.08]">
          {children}
        </code>
      );
    },
    pre: ({ children }) => <>{children}</>,
    a: ({ href, children }) => (
      <a
        href={href}
        target={href?.startsWith('/') ? undefined : '_blank'}
        rel={href?.startsWith('/') ? undefined : 'noopener noreferrer'}
        className="text-accent-fill hover:underline font-medium transition-colors"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-text-primary dark:text-white">
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="italic text-text-primary dark:text-white">{children}</em>,
  };

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
