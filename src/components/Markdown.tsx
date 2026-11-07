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
      <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4 text-text-primary dark:text-dark-text-primary">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3 text-text-primary dark:text-dark-text-primary">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-2 text-text-primary dark:text-dark-text-primary">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-body text-text-secondary dark:text-dark-text-secondary mb-4 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-body text-text-secondary dark:text-dark-text-secondary mb-4 ml-4 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-body text-text-secondary dark:text-dark-text-secondary mb-4 ml-4 space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="mb-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent-fill pl-4 py-2 my-4 italic text-text-secondary dark:text-dark-text-secondary">
        {children}
      </blockquote>
    ),
    code: ({ children, className }) => {
      const match = /language-(\w+)/.exec(className || '');
      const lang = match ? match[1] : '';
      
      if (lang) {
        return (
          <SyntaxHighlighter language={lang} style={oneDark} className="rounded-lg my-4">
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        );
      }
      return (
        <code className="bg-bg-alt dark:bg-dark-bg-alt px-1.5 py-0.5 rounded font-mono text-sm text-accent-fill">
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
        className="text-accent-fill hover:text-accent-hover underline transition-colors"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-text-primary dark:text-dark-text-primary">
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="italic text-text-primary dark:text-dark-text-primary">{children}</em>,
  };

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
