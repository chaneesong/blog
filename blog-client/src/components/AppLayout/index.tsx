import React from 'react';
import { useRouter } from 'next/router';

import Navbar from './Navigation';
import Footer from './Footer';
import styled from 'styled-components';
import PosterGrid from './PageLayout/PosterGrid';
import DefaultGrid from './PageLayout/DefaultGrid';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #1c2128;
`;

const GridContainer = styled.div`
  background-color: #22272e;
  flex-grow: 1;
  @media only screen and (min-width: 1025px) {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 16px;
  }

  @media only screen and (min-width: 601px) and (max-width: 1024px) {
  }

  @media only screen and (max-width: 600px) {
  }
`;

const AppLayout = ({ children }: ReactNodeProps) => {
  const router = useRouter();
  const hasId = router.query.id ?? null;

  return (
    <MainContainer>
      <Navbar />
      <GridContainer>
        {hasId ? (
          <PosterGrid>{children}</PosterGrid>
        ) : (
          <DefaultGrid>{children}</DefaultGrid>
        )}
      </GridContainer>
      <Footer />
    </MainContainer>
  );
};

export default AppLayout;
