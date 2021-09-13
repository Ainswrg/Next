import A from '../components/A';

const Index = () => {
  return (
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
  );
};

export default Index;
