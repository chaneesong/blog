import React from 'react';
import styled from 'styled-components';

const AppFooter = styled.footer`
  background-color: #efefef;
  width: 100%;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Footer = () => {
  return (
    <AppFooter>
      <Container className="container p-4">
        <span>© 2023 Chaneesong Copyright</span>
        <div>
          <a href="https://github.com/chaneesong">
            <Image src="/images/github-icon.png" alt="github" />
          </a>
          <a href="mailto:sch102403@gmail.com">
            <Image src="/images/mail.png" alt="mail" />
          </a>
        </div>
      </Container>
    </AppFooter>
  );
};

export default Footer;
