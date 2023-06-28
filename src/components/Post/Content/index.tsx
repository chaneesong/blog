import React from 'react';
import ReactMarkdown from 'react-markdown';
import MarkdownRenderer from './MarkdownRenderer';

interface ContentProp {
  content: string;
}

const ContentContainer = ({ content }: ContentProp) => {
  return <MarkdownRenderer content={content} />;
};

export default ContentContainer;
