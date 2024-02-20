import React from 'react';
import { useRouter } from 'next/router';

import Navbar from './Navigation';
import Footer from './Footer';
import styled from 'styled-components';
import PosterContainer from './PageLayout/PosterGrid';
import DefaultContainer from './PageLayout/DefaultGrid';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #1c2128;
`;

const FlexContainer = styled.div`
  flex-grow: 1;
  background-color: #22272e;

  @media only screen and (min-width: 1025px) {
    display: flex;
    gap: 16px;
  }

  @media only screen and (min-width: 694px) and (max-width: 1024px) {
    display: flex;
    gap: 16px;
  }

  @media only screen and (max-width: 694px) {
    display: block;
    padding: 0 10px;
    gap: 16px;
  }
`;

const AppLayout = ({ children }: ReactNodeProps) => {
  const router = useRouter();
  const hasId = router.query.id ?? null;

  return (
    <MainContainer>
      <Navbar />
      <FlexContainer>
        {hasId ? (
          <PosterContainer>{children}</PosterContainer>
        ) : (
          <DefaultContainer>{children}</DefaultContainer>
        )}
      </FlexContainer>
      <Footer />
    </MainContainer>
  );
};

export default AppLayout;
