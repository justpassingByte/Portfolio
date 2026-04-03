import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Thang | System Builder & Full-Stack Engineer</title>
        <meta name="description" content="Portfolio of Thang — System Builder. Engineering intelligent agents, real-time pipelines, and scalable cloud infrastructure." />
        <meta name="keywords" content="System Builder, Full-Stack Engineer, Next.js, React, Node.js, AI Integration, Real-Time Systems, Cloud DevOps, AWS" />
        <meta property="og:title" content="Thang | System Builder" />
        <meta property="og:description" content="Engineering intelligent agents, real-time pipelines, and scalable cloud infrastructure." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <div className={`page bg-site text-white bg-cover bg-no-repeat relative`}>
        <TopLeftImg/>
        <Nav/>
        <Header/>
        {children}
      </div>     
    </>
  )
}

export default Layout;
