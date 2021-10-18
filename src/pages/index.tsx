import NavBar from "components/NavBar";
import Product from "components/Product";
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
