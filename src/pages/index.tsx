import Button from "components/common/Button";
import Cart from "components/icons/Cart";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <p>Lorem ipsum dolor sit amet.</p>
      <Button type="button">
        <Cart />
        Add To Cart
      </Button>
    </div>
  );
};

export default Home;
