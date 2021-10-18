import styled, { css } from "styled-components";
import { rem } from "styles/utils";

export const Container = styled.div`
  width: ${rem(550)};
  z-index: 100;
`;

export const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${rem(24)};
  cursor: pointer;

  svg {
    path {
      fill: white;
    }
  }
`;

export const ImageContainer = styled.div`
  margin-bottom: ${rem(40)};
  position: relative;

  img {
    width: 100%;
    max-height: ${rem(550)};
    height: 70vh;
    border-radius: ${rem(15)};
  }
`;

export const Thumbnails = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Thumbnail = styled.li<{ $selected: boolean }>`
  cursor: pointer;

  img {
    width: ${rem(88)};
    height: ${rem(88)};
    border-radius: ${rem(10)};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      position: relative;
      &::after {
        display: block;
        content: "";

        position: absolute;
        top: 0;
        left: 0;
        width: ${rem(88)};
        height: ${rem(88)};
        background-color: rgb(255, 255, 255, 0.75);
        border-radius: ${rem(10)};
      }
    `}
`;

const Button = styled.button`
  width: ${rem(56)};
  height: ${rem(56)};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: calc(50% - ${rem(28)});
`;

export const PrevButton = styled(Button)`
  left: 0;
  transform: translateX(-${rem(28)});
`;

export const NextButton = styled(Button)`
  right: 0;
  transform: translateX(${rem(28)});
`;
