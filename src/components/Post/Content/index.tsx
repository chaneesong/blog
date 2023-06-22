import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ContentProp {
  content: string;
}

const ContentContainer = ({ content }: ContentProp) => {
  return <ReactMarkdown children={content} />;
};

export default ContentContainer;
