import A from '../components/A';
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <meta keywords="Jaslan D, next.js"></meta>
        <title>Main page</title>
      </Head>
      <div>
        <div className="navbar">
          <A href={"/"} text={"Main"} />
          <A href={"/users"} text={"Users"} />
        </div>
        <h1>Main page</h1>
        <style jsx>
          {`
            .navbar {
              background: violet;
              padding: 15px;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Index;
