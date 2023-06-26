import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

interface CategorizationProps {
  prefix: string;
  root: string;
}

const StyledCategoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid gray;

  &:hover span {
    transform: translateX(10px);
  }
`;

const StyledArrow = styled.span`
  transition: transform 0.3s ease-in-out;
`;

const Categorization = ({ prefix, root }: CategorizationProps) => {
  return (
    <Link href={prefix + '/' + root}>
      <StyledCategoryItem>
        <h4>{root}</h4>
        <StyledArrow>{`>>`}</StyledArrow>
      </StyledCategoryItem>
    </Link>
  );
};

export default Categorization;
