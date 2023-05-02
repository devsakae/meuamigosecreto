import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { Fragment } from 'react';

const Layout = ({ children }: any) => {
  return (
    <Fragment>
      <Head>
        <title>Meu amigo secreto</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <main className='min-h-[600px]'>
        { children }
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layout;