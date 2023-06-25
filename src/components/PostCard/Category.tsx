import React from 'react';
import styled from 'styled-components';

interface CategoryProps {
  category: string;
}

const Category = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin-left: 5px;
  margin-bottom: 10px;

  &:hover {
    color: grey;
  }
`;

const CategorySection = ({ category }: CategoryProps) => {
  return <Category>{category}</Category>;
};

export default CategorySection;
