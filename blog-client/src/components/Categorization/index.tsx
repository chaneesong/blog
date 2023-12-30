import Link from 'next/link';
import React from 'react';
import { StyledArrow, StyledCategoryItem, StyledText } from './styled';

interface CategorizationProps {
  prefix: string;
  root: string;
}

const Categorization = ({ prefix, root }: CategorizationProps) => {
  return (
    <Link href={prefix + '/' + root}>
      <StyledCategoryItem>
        <StyledText>{root}</StyledText>
        <StyledArrow>{`>>`}</StyledArrow>
      </StyledCategoryItem>
    </Link>
  );
};

export default Categorization;
