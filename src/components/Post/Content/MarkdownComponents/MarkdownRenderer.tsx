import React from 'react';
import remarkGfm from 'remark-gfm';
import MarkdownWrapper from './MarkdownWrapper';
import components from '.';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <MarkdownWrapper
      remarkPlugins={[remarkGfm]}
      components={{
        ...components,
      }}
      children={content}
    />
  );
};

export default MarkdownRenderer;
