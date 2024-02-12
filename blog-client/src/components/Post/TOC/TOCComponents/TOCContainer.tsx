import styled from 'styled-components';

const TOCContainer = styled.div`
  position: sticky;
  top: 10%;
  padding-left: 15px;
  border-left: 3px solid #e3e3e3;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export default TOCContainer;
