import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 1.125em;
  line-height: 2;
  margin: 18px 0;
`;

const ParagraphRenderer = ({ node, ...props }: any) => <Paragraph {...props} />;

export default ParagraphRenderer;
