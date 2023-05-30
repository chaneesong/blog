import React from 'react';

import Navigation from './Navigation';
import Footer from './Footer';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Navigation />
      <div className="App d-flex flex-column" style={{ zIndex: 999 }}>
        <div className="container row mx-auto flex-fill contents-padding-top">
          <div className="col-md-2"></div>
          <div className="flex-column col-md-8">{children}</div>
          <div className="col-md-2"></div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
