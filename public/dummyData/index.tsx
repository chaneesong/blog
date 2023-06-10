import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useEffect, useState } from 'react';

export function post() {
  const [style, setStyle] = useState({});
  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism').then((mod) =>
      setStyle(mod.default)
    );
  });

  const markdown = `Here is some JavaScript code:

  ~~~javascript
  console.log('It works!');

  ~~~
  ;`;

  return (
    <>
      <h1>Title Test</h1>
      <p>Paragraph Test</p>
      <a href="http://chaneesong.github.com">test</a>
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                style={style}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </>
  );
}

export const categoriesData = ['javascript', 'typescript', 'test category'];

export const tagsData = ['tagTest1', 'tagTest2'];

const date = new Date();

const createdAt = `${date.getFullYear()} / ${
  date.getMonth() + 1
} / ${date.getDate()}`;

export const postData = [
  {
    id: 1,
    title: 'Title1',
    content: `모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를
      가진다. 모든 국민은 종교의 자유를 가진다. 국가는 농·어민과 중소기업의
      자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 모든 국민은
      양심의 자유를 가진다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의
      조력을 받을 권리를 가진다.`,
    category: 'category1',
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt,
  },
  {
    id: 2,
    title: 'Title2',
    content: `모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를
      가진다. 모든 국민은 종교의 자유를 가진다. 국가는 농·어민과 중소기업의
      자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 모든 국민은
      양심의 자유를 가진다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의
      조력을 받을 권리를 가진다.`,
    category: 'category1',
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt,
  },
  {
    id: 3,
    title: 'Title3',
    content: `모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를
      가진다. 모든 국민은 종교의 자유를 가진다. 국가는 농·어민과 중소기업의
      자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 모든 국민은
      양심의 자유를 가진다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의
      조력을 받을 권리를 가진다.`,
    category: 'category1',
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt,
  },
];
