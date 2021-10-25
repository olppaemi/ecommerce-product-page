import styled, { css } from "styled-components";
import media from "styles/media";
import { rem } from "styles/utils";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: ${rem(32)};
  position: relative;
  z-index: 10;

  img {
    width: 100%;
    border-radius: ${rem(15)};
  }

  @media (max-width: ${media.md}) {
    img {
      max-height: ${rem(300)};
      object-fit: cover;
      object-position: center;
      border-radius: 0;
    }
  }
`;

export const Thumbnails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Thumbnail = styled.div<{ $selected: boolean }>`
  width: ${rem(88)};
  height: ${rem(88)};
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: ${rem(10)};
    object-fit: cover;
  }

  &:hover {
    &::after {
      display: block;
      content: "";

      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgb(255, 255, 255, 0.75);
      border-radius: ${rem(10)};
    }
  }

  ${({ $selected }) =>
    $selected &&
    css`
      &::after {
        display: block;
        content: "";

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(255, 255, 255, 0.75);
        border-radius: ${rem(10)};
        border: 2px solid ${({ theme }) => theme.colors.orange};
      }
    `}
`;

const Button = styled.button`
  width: ${rem(40)};
  height: ${rem(40)};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: calc(50% - ${rem(20)});

  &:hover {
    svg path {
      stroke: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export const PrevButton = styled(Button)`
  left: 0;
  transform: translateX(${rem(16)});
`;

export const NextButton = styled(Button)`
  right: 0;
  transform: translateX(-${rem(16)});
`;
