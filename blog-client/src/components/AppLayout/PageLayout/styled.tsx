import styled from 'styled-components';

export const Side = styled.div`
  flex: 1;
`;

export const Center = styled.div`
  @media only screen and (min-width: 1025px) {
    width: 700px;
  }

  @media only screen and (min-width: 694px) and (max-width: 1024px) {
    flex: 3;
  }
`;
