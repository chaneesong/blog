import React from 'react';

interface ContentProp {
  content: string;
}

const ContentContainer = ({ content }: ContentProp) => {
  return <div>{content}</div>;
};

export default ContentContainer;
