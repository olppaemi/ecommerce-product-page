import ThumbnailsPortal from "components/layout/ThumbnailsPortal";
import useMobile from "hooks/useMobile";
import useModal from "hooks/useModal";
import * as S from "./styles";

const ProductImages = () => {
  const isMobile = useMobile();
  const { openModal, closeModal, ModalPortal } = useModal();
  return (
    <S.Container>
      <S.ImageContainer>
        <img src="/images/image-product-1.jpg" alt="product-image" />
      </S.ImageContainer>
      {!isMobile && (
        <>
          <S.Thumnails>
            <img
              src="/images/image-product-1-thumbnail.jpg"
              alt="thumbnail-1"
              onClick={openModal}
            />
            <img
              src="/images/image-product-2-thumbnail.jpg"
              alt="thumbnail-2"
              onClick={openModal}
            />
            <img
              src="/images/image-product-3-thumbnail.jpg"
              alt="thumbnail-3"
              onClick={openModal}
            />
            <img
              src="/images/image-product-4-thumbnail.jpg"
              alt="thumbnail-4"
              onClick={openModal}
            />
          </S.Thumnails>
          <ModalPortal>
            <ThumbnailsPortal closeModal={closeModal} />
          </ModalPortal>
        </>
      )}
    </S.Container>
  );
};

export default ProductImages;
