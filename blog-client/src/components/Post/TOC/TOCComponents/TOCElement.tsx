import styled from 'styled-components';

const TOCElement = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  /* overflow: hidden; */
  color: grey;
  margin-bottom: 7px;
  font-weight: 700;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

export default TOCElement;
