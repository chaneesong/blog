import React from 'react';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import Navigation from './Navigation';
import Footer from './Footer';
import DefaultGrid from './PageLayout/DefaultGrid';
import PosterGrid from './PageLayout/PosterGrid';

const AppContentsContainer = styled.div`
  z-index: 999;
`;

const AppLayout = ({ children }: ReactNodeProps) => {
  const router = useRouter();
  const hasId = router.query.id ?? null;

  return (
    <>
      <Navigation />
      <AppContentsContainer className="App d-flex flex-column">
        {hasId ? (
          <PosterGrid>{children}</PosterGrid>
        ) : (
          <DefaultGrid>{children}</DefaultGrid>
        )}
        <Footer />
      </AppContentsContainer>
    </>
  );
};

export default AppLayout;
