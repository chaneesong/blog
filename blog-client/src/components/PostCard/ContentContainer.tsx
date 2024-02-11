import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import CategorySection from './Category';
import Content from './Content';
import TagSection from './Tag';
import CreatedAt from './CreatedAt';
import Link from 'next/link';

interface PostContentProps {
  post: Post;
}

const StyledContentsContainer = styled.div`
  width: 100%;
  margin: 1.5em 0;
  padding: 0 1.25em;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    margin-top: 15px;
  }
`;

const ContentsContainer = ({ post }: PostContentProps) => {
  return (
    <StyledContentsContainer>
      <HeaderContainer>
        <Link href={`/posts/${post.id}`} key={post.id} passHref>
          <Title title={post.title} />
        </Link>
        <CategorySection category={post.category.keyword} />
      </HeaderContainer>
      <Content content={post.content} />
      <FooterContainer>
        <TagSection tags={post.tags.map((tag) => tag.keyword)} />
        <CreatedAt createdAt={post.createdAt} />
      </FooterContainer>
    </StyledContentsContainer>
  );
};

export default ContentsContainer;
