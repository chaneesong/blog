import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const CardTitle = styled(Card.Title)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 15px;
`;

export default CardTitle;
