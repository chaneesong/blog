import CodeRenderer from './CodeRenderer';
import ParagraphRenderer from './Paragraph';
import QuoteRenderer from './QuoteRenderer';

const components = {
  code: CodeRenderer,
  blockquote: QuoteRenderer,
  p: ParagraphRenderer,
};

export default components;
