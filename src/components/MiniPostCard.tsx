import React, { useMemo } from 'react';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import RemoveMarkdown from 'remove-markdown';
import styled from 'styled-components';

interface PostProps {
  post: Post;
}

const StyledLink = styled(Link)`
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StyledPostCardContent = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MiniPostCard = ({ post }: PostProps) => {
  const contentPreview = useMemo(
    () => RemoveMarkdown(post.content, { useImgAltText: false }),
    [post.content]
  ).slice(0, 100);

  return (
    <StyledLink
      href={`/post/${post.id}`}
      style={{ width: '20rem', marginBottom: '10px' }}
    >
      <Card style={{ border: 'none' }}>
        <Card.Img style={{ borderRadius: '5px' }} src={post.image} />
        <Card.Title className="contents-margin-top">{post.title}</Card.Title>
        <StyledPostCardContent>{contentPreview}</StyledPostCardContent>
      </Card>
    </StyledLink>
  );
};

export default MiniPostCard;
