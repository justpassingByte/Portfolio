import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Thang | AI Product Builder & Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Thang Nguyen, a full-stack developer focused on AI product workflows, React, Next.js, Node.js, databases, RAG, and LLM integration."
        />
        <meta name="keywords" content="AI Product Builder, Full-Stack Developer, React, Next.js, Node.js, TypeScript, RAG, LLM Integration" />
        <meta property="og:title" content="Thang | AI Product Builder" />
        <meta property="og:description" content="Full-stack AI product case studies, from idea to MVP." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <div className="page relative bg-site bg-cover bg-no-repeat text-white">
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
