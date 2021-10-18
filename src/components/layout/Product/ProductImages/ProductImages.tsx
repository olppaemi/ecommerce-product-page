import { useState } from "react";
import ThumbnailsPortal from "components/layout/ThumbnailsPortal";
import useMobile from "hooks/useMobile";
import useModal from "hooks/useModal";
import shoes from "lib/data.json";
import * as S from "./styles";
import Previous from "components/icons/Previous";
import Next from "components/icons/Next";

const ProductImages = () => {
  const isMobile = useMobile();
  const [index, setIndex] = useState(0);
  const { openModal, closeModal, ModalPortal } = useModal();

  const handlePrev = () => {
    setIndex((i) => (i > 0 ? i - 1 : shoes.length - 1));
  };

  const handleNext = () => {
    setIndex((i) => (i < shoes.length - 1 ? i + 1 : 0));
  };

  return (
    <S.Container>
      <S.ImageContainer>
        <img src={shoes[index].image} alt="product-image" />
        {isMobile && (
          <>
            <S.PrevButton onClick={handlePrev}>
              <Previous />
            </S.PrevButton>
            <S.NextButton onClick={handleNext}>
              <Next />
            </S.NextButton>
          </>
        )}
      </S.ImageContainer>
      {!isMobile && (
        <>
          <S.Thumbnails>
            {shoes.map((image, i) => (
              <S.Thumbnail
                key={i}
                onClick={() => openModal()}
                $selected={index === i}
              >
                <img src={image.thumbnail} alt="thumbnail" />
              </S.Thumbnail>
            ))}
          </S.Thumbnails>
          <ModalPortal>
            <ThumbnailsPortal closeModal={closeModal} />
          </ModalPortal>
        </>
      )}
    </S.Container>
  );
};

export default ProductImages;
