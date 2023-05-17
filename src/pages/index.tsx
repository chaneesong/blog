import Head from 'next/head';
import MainContent from './components/mainContent';
import { Row } from 'react-bootstrap';
import AppLayout from './components/AppLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Flog</title>
        <meta name="description" content="Index page of blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <h3>Latest Contents</h3>
        <Row className="justify-content-around">
          <MainContent />
          <MainContent />
        </Row>
        <Row className="justify-content-around">
          <MainContent />
          <MainContent />
        </Row>
      </AppLayout>
    </>
  );
}
