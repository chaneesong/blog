import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const CardContent = styled(Card.Text)`
  color: grey;
  font-size: 13px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default CardContent;
