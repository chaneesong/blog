import React from 'react';
import styled from 'styled-components';

interface CreatedAtProps {
  createdAt: string;
}

const Date = styled.span`
  font-size: 15px;
  margin-left: 10px;
`;

const CreatedAt = ({ createdAt }: CreatedAtProps) => {
  return <Date>{createdAt}</Date>;
};

export default CreatedAt;
