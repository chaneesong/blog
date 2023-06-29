import React, { ReactNode, useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import QuoteRenderer from './markdownComponents/QuoteRenderer';

interface MarkdownRendererProps {
  content: string;
}

interface CodeProps {
  node: any;
  inline?: boolean;
  className?: string;
  children: ReactNode & ReactNode[];
  style?: any;
}

const CodeRenderer = ({
  inline,
  className,
  children,
  style,
  ...props
}: CodeProps) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter
      {...props}
      children={String(children).replace(/\n$/, '')}
      style={style}
      language={match[1]}
      PreTag="div"
    />
  ) : (
    <code {...props} className={className}>
      {children}
    </code>
  );
};

const components = {
  blockquote: QuoteRenderer,
};

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism/material-dark').then(
      (mod) => setStyle(mod.default)
    );
  });

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        ...components,
        code: (props: CodeProps) => <CodeRenderer {...props} style={style} />,
      }}
      children={content}
    />
  );
};

export default MarkdownRenderer;
