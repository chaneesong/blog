import Head from 'next/head';
import Navigation from './components/navigation';
import Footer from './components/footer';
import MainContent from './components/mainContent';
import { Row } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Head>
        <title>Flog</title>
        <meta name="description" content="Index page of blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App d-flex flex-column">
        <Navigation />
        <div className="container row mx-auto flex-fill contents-padding-top">
          <div className="col-md-2"></div>
          <div className="flex-column col-md-8">
            <h3>Latest Contents</h3>
            <Row className="justify-content-around">
              <MainContent />
              <MainContent />
            </Row>
            <Row className="justify-content-around">
              <MainContent />
              <MainContent />
            </Row>
          </div>
          <div className="col-md-2"></div>
        </div>
        <Footer />
      </div>
    </>
  );
}
