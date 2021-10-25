import Button from "components/common/Button";
import Couter from "components/common/Counter";
import { useCartContext } from "contexts/CartContext";
import { Product } from "lib/types";
import CartWhite from "components/icons/CartWhite";
import { useState } from "react";
import * as S from "./styles";

const ProductDetails = () => {
  const [number, setNumber] = useState(0);
  const { addToCart } = useCartContext();

  const hanldeAddToCart = () => {
    const newProduct: Product = {
      name: "Fall Limited Edition Sneakers",
      quantity: number,
      price: 125,
      image: "images/image-product-1-thumbnail.jpg",
    };
    addToCart(newProduct);
    setNumber(0);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <h3>Sneaker Company</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <S.PriceWrapper>
          <h2>
            $125.00 <S.Badge>50%</S.Badge>
          </h2>
          <h4>$250.00</h4>
        </S.PriceWrapper>
        <S.ButtonGroup>
          <Couter number={number} setNumber={setNumber} />
          <Button onClick={hanldeAddToCart}>
            <CartWhite /> <span>Add to cart</span>
          </Button>
        </S.ButtonGroup>
      </S.Wrapper>
    </S.Container>
  );
};

export default ProductDetails;
