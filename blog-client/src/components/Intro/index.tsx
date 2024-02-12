import React from 'react';
import IntroTitle from './IntroTitle';
import IntroContent from './IntroArticle';
import styled from 'styled-components';

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const BlogIntro = () => {
  return (
    <IntroContainer>
      <IntroTitle />
      <IntroContent />
    </IntroContainer>
  );
};

export default BlogIntro;
