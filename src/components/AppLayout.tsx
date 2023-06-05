import React from 'react';

import Navigation from './Navigation';
import Footer from './Footer';
import styled from 'styled-components';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppContentsContainer = styled.div`
  z-index: 999;
`;

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Navigation />
      <AppContentsContainer className="App d-flex flex-column">
        <div className="container row mx-auto flex-fill contents-padding-top">
          <div className="col-md-2"></div>
          <div className="flex-column col-md-8">{children}</div>
          <div className="col-md-2"></div>
        </div>
        <Footer />
      </AppContentsContainer>
    </>
  );
};

export default AppLayout;
