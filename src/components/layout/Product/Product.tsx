import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";
import * as S from "./styles";

const Product = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <ProductImages />
        <ProductDetails />
      </S.Wrapper>
    </S.Container>
  );
};

export default Product;
