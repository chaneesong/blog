import React from 'react';
import styled from 'styled-components';

const AppFooter = styled.footer`
  border-top: solid;
`;

export default function Footer() {
  return (
    <>
      <AppFooter>
        <div className="container p-3">© 2023 Chaneesong Copyright</div>
      </AppFooter>
    </>
  );
}
