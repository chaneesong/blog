import React from 'react';
import MarkdownRenderer from './MarkdownComponents/MarkdownRenderer';

interface ContentProp {
  content: string;
}

const ContentContainer = ({ content }: ContentProp) => {
  return <MarkdownRenderer content={content} />;
};

export default ContentContainer;
