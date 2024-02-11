import React from 'react';
import { AppFooter, Container, Copyright, Image } from './styled';

const Footer = () => (
  <AppFooter>
    <Container>
      <div>
        <a title="github" href="https://github.com/chaneesong">
          <Image src="/images/github.svg" alt="github" />
        </a>
        <a title="mail" href="mailto:sch102403@gmail.com">
          <Image src="/images/mail.svg" alt="mail" />
        </a>
      </div>
      <Copyright>© 2023 Chaneesong</Copyright>
    </Container>
  </AppFooter>
);

export default Footer;
