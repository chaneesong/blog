import Head from "next/head";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import ListGroup from "react-bootstrap/ListGroup";

import { category } from '../dummyData'

export default function Category() {
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
        <div className="container row mx-auto flex-fill">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h3>Category</h3>
            <ListGroup variant="flush">
              {Array.from(category.keys()).map((value: string) => (
                <ListGroup.Item key={value}><h4>{value}</h4></ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <div className="col-md-2"></div>
        </div>
        <Footer />
      </div>
    </>
  )
}
