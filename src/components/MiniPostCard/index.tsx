import React, { useMemo } from 'react';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import RemoveMarkdown from 'remove-markdown';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import CardBody from './components/CardBody';
import CardTitle from './components/CardTitle';
import CardContent from './components/CardContent';
import CardContainer from './components/CardContainer';

interface PostProps {
  post: Post;
}

const StyledLink = styled(Link)`
  width: 20rem;
  margin-bottom: 10px;
`;

const MiniPostCard = ({ post }: PostProps) => {
  const contentPreview = useMemo(
    () => RemoveMarkdown(post.content, { useImgAltText: false }),
    [post.content]
  ).slice(0, 100);
  // TODO 이미지 임시 제거
  return (
    <StyledLink href={`/post/${post.id}`}>
      <CardContainer>
        {/* <Card.Img src={post.image} /> */}
        <CardBody>
          <CardTitle>{post.title}</CardTitle>
          <CardContent>{contentPreview}</CardContent>
        </CardBody>
      </CardContainer>
    </StyledLink>
  );
};

export default MiniPostCard;
