import React, { ReactNode, useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import InlineCode from './InlineCode';

export interface CodeProps {
  node: any;
  inline?: boolean;
  className?: string;
  children: ReactNode & ReactNode[];
  style?: any;
}

const Code = ({
  node,
  inline,
  className,
  children,
  style,
  ...props
}: CodeProps) => {
  const [codeStyle, setCodeStyle] = useState({});
  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism/material-dark').then(
      (mod) => setCodeStyle(mod.default)
    );
  });

  const match = /language-(\w+)/.exec(className || '');

  return !inline && match ? (
    <SyntaxHighlighter
      {...props}
      children={String(children).replace(/\n$/, '')}
      style={codeStyle}
      language={match[1]}
      PreTag="div"
    />
  ) : (
    <InlineCode {...props} className={className}>
      {children}
    </InlineCode>
  );
};

const CodeRenderer = ({ ...props }: CodeProps) => <Code {...props} />;

export default CodeRenderer;
