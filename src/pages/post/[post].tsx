import Head from 'next/head';
import { Col, Row } from 'react-bootstrap';

import Navigation from '../components/navigation';
import Footer from '../components/footer';

export default function Post() {
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
            <h3>Title</h3>
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
