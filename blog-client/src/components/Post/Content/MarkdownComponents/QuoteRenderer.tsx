import React from 'react';
import styled from 'styled-components';

const StyledBlockQuote = styled.blockquote`
  margin: 1em 0;
  border-left: 4px solid #ccc;
  padding-left: 1em;
`;

const QuoteRenderer = ({ children }: ReactNodeProps) => (
  <StyledBlockQuote>{children}</StyledBlockQuote>
);

export default QuoteRenderer;
