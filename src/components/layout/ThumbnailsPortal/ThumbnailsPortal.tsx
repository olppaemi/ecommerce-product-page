import Close from "components/icons/Close";
import { useState } from "react";
import * as S from "./styles";

const ThumbnailsPortal = ({ closeModal }: { closeModal(): void }) => {
  const images = [
    {
      image: "/images/image-product-1.jpg",
      thumbnail: "/images/image-product-1-thumbnail.jpg",
    },
    {
      image: "/images/image-product-2.jpg",
      thumbnail: "/images/image-product-2-thumbnail.jpg",
    },
    {
      image: "/images/image-product-3.jpg",
      thumbnail: "/images/image-product-3-thumbnail.jpg",
    },
    {
      image: "/images/image-product-4.jpg",
      thumbnail: "/images/image-product-4-thumbnail.jpg",
    },
  ];
  const [index, setIndex] = useState(0);

  return (
    <S.Container>
      <S.CloseIcon onClick={closeModal}>
        <Close />
      </S.CloseIcon>
      <S.ImageContainer>
        <img src={images[index].image} alt="product image" />
      </S.ImageContainer>
      <S.Thumbnails>
        {images.map((image, i) => (
          <S.Thumbnail
            key={i}
            onClick={() => setIndex(i)}
            $selected={index === i}
          >
            <img src={image.thumbnail} alt="thumbnail" />
          </S.Thumbnail>
        ))}
      </S.Thumbnails>
    </S.Container>
  );
};

export default ThumbnailsPortal;
