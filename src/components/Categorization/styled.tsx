import styled from 'styled-components';

export const StyledText = styled.span`
  font-size: 20px;
  margin-left: 10px;
`;

export const StyledCategoryItem = styled.div`
  background-color: #efefef;
  color: grey;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: black;
  }

  &:hover span:last-child {
    transform: translateX(5px);
  }
`;

export const StyledArrow = styled.span`
  margin-right: 10px;
  transition: transform 0.3s ease-in-out;
`;
