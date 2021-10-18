import Close from "components/icons/Close";
import Next from "components/icons/Next";
import Previous from "components/icons/Previous";
import { useEffect, useState } from "react";
import images from "lib/data.json";
import * as S from "./styles";

const ThumbnailsPortal = ({ closeModal }: { closeModal(): void }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  };

  const handleNext = () => {
    setIndex((i) => (i < images.length - 1 ? i + 1 : 0));
  };

  useEffect(() => {
    const handlePress = (e: KeyboardEvent) => {
      console.log(e);
      switch (e.key) {
        case "ArrowLeft":
          handlePrev();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "Escape":
          closeModal();
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", handlePress);
    return () => document.removeEventListener("keydown", handlePress);
  }, []);

  return (
    <S.Container>
      <S.CloseIcon onClick={closeModal}>
        <Close />
      </S.CloseIcon>
      <S.ImageContainer>
        <img src={images[index].image} alt="product image" />
        <S.PrevButton onClick={handlePrev}>
          <Previous />
        </S.PrevButton>
        <S.NextButton onClick={handleNext}>
          <Next />
        </S.NextButton>
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
