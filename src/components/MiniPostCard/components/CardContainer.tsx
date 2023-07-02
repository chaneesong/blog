import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const CardContainer = styled(Card)`
  min-height: 262px;
  border-radius: 0% !important;
  box-shadow: 2px 2px 5px #ccc;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export default CardContainer;
