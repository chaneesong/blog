import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import RemoveMarkdown from 'remove-markdown';
import styled from 'styled-components';

interface ContentProps {
  content: string;
}

const PostCardContent = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  width: 100%;
  margin-left: 5px;
  margin-bottom: 10px;
`;

export default function ContentContainer({ content }: ContentProps) {
  const contentPreview = useMemo(
    () => RemoveMarkdown(content, { useImgAltText: false }),
    [content]
  ).slice(0, 300);

  return <PostCardContent>{contentPreview}</PostCardContent>;
}
