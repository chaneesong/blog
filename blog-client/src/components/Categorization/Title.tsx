import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

const Title = ({ title }: any) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
    </>
  );
};

export default Title;
