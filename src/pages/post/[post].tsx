import Head from 'next/head';
import { Col, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import Navigation from '../components/navigation';
import Footer from '../components/footer';
import { useEffect, useState } from 'react';

import { markdown } from '@/dummyData';

export default function Post() {
  const [style, setStyle] = useState({});
  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism').then((mod) =>
      setStyle(mod.default)
    );
  });

  return (
    <>
      <Head>
        <title>Flog</title>
        <meta name="description" content="Index page of blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App d-flex flex-column contents-padding-top">
        <Navigation />
        <Row className="container mx-auto flex-fill">
          <Col md={2} className="d-none d-md-block"></Col>
          <Col md={8} className="flex-column">
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
          </Col>
          <Col
            md={2}
            className="position-fixed d-none d-md-block"
            style={{ right: 43 }}
          >
            <div>list of contents</div>
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  );
}
