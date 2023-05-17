import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './navigation';
import Footer from './footer';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="App d-flex flex-column">
      <Navigation />
      <div className="container row mx-auto flex-fill contents-padding-top">
        <div className="col-md-2"></div>
        <div className="flex-column col-md-8">{children}</div>
        <div className="col-md-2"></div>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
