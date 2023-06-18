import React from 'react';
import styled from 'styled-components';

interface CategoryProps {
  category: string;
}

const Category = styled.div`
  margin-bottom: 10px;
`;

const CategorySection = ({ category }: CategoryProps) => {
  return <Category>{category}</Category>;
};

export default CategorySection;
