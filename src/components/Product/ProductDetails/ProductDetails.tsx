import Button from "components/common/Button";
import Couter from "components/common/Counter";
import * as S from "./styles";

const ProductDetails = () => {
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
          <Couter />
          <Button>Add to cart</Button>
        </S.ButtonGroup>
      </S.Wrapper>
    </S.Container>
  );
};

export default ProductDetails;
