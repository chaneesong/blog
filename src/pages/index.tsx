import Head from 'next/head'
import Navigation from './components/navigation'
import Footer from './components/footer'

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
        <div className="container row mx-auto flex-fill">
          <div className="col-md-2">
            Column
          </div>
          <div className="col-md-8" style={{borderLeft: 'solid', borderRight: 'solid'}}>
            Column
          </div>
          <div className="col-md-2" style={{borderRight: 'solid'}}>
            Column
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
