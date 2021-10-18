import useMobile from "hooks/useMobile";
import * as S from "./styles";

const ProductImages = () => {
  const isMobile = useMobile();
  return (
    <S.Container>
      <S.ImageContainer>
        <img src="/images/image-product-1.jpg" alt="product-image" />
      </S.ImageContainer>
      {!isMobile && (
        <S.Thumnails>
          <img src="/images/image-product-1-thumbnail.jpg" alt="thumbnail-1" />
          <img src="/images/image-product-2-thumbnail.jpg" alt="thumbnail-2" />
          <img src="/images/image-product-3-thumbnail.jpg" alt="thumbnail-3" />
          <img src="/images/image-product-4-thumbnail.jpg" alt="thumbnail-4" />
        </S.Thumnails>
      )}
    </S.Container>
  );
};

export default ProductImages;
