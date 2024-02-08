import React from 'react';
import { useRouter } from 'next/router';

import Navbar from './Navigation';
import Footer from './Footer';
import DefaultGrid from './PageLayout/DefaultGrid';
import PosterGrid from './PageLayout/PosterGrid';
import styled from 'styled-components';

const MainContainer = styled.div`
  min-width: 100%;
  min-height: 100%;
  align-items: flex-start;
  background-color: #22272e;
`;

const AppLayout = ({ children }: ReactNodeProps) => {
  const router = useRouter();
  const hasId = router.query.id ?? null;

  return (
    <MainContainer className="d-flex flex-column">
      <Navbar />
      <div className="App flex-grow-1 flex-column">
        {hasId ? (
          <PosterGrid>{children}</PosterGrid>
        ) : (
          <DefaultGrid>{children}</DefaultGrid>
        )}
      </div>
      <Footer />
    </MainContainer>
  );
};

export default AppLayout;
