import React from 'react';
import { AppFooter, Container, Copyright, Image } from './styled';

const Footer = () => (
  <AppFooter>
    <Container className="container p-4">
      <div>
        <a title="github" href="https://github.com/chaneesong">
          <Image src="/images/github-icon.png" alt="github" />
        </a>
        <a title="mail" href="mailto:sch102403@gmail.com">
          <Image src="/images/mail.png" alt="mail" />
        </a>
      </div>
      <Copyright>© 2023 Chaneesong Copyright</Copyright>
    </Container>
  </AppFooter>
);

export default Footer;
