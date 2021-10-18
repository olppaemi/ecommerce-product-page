import NavBar from "components/layout/NavBar";
import Product from "components/layout/Product";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Product />
      </main>
    </>
  );
};

export default Home;
