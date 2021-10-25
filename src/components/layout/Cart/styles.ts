import styled from "styled-components";
import media from "styles/media";
import { rem } from "styles/utils";

export const Cart = styled.div`
  width: ${rem(360)};
  height: ${rem(256)};
  background-color: white;
  box-shadow: 0 ${rem(20)} ${rem(50)} -${rem(20)} hsla(220, 13%, 13%, 0.5031);
  border-radius: ${rem(10)};

  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-25%, ${rem(94)});
  z-index: 1000;

  @media (max-width: ${media.md}) {
    position: fixed;
    top: 0;
    left: ${rem(8)};
    right: ${rem(8)};
    bottom: 0;
    transform: translateY(${rem(80)});
    width: initial;
  }
`;

export const CartHeader = styled.div`
  height: ${rem(67)};
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e4e9f2;
  color: ${({ theme }) => theme.colors.veryVarkBlue};
  font-weight: bold;
  padding: ${rem(24)};
`;

export const CartBody = styled.div`
  padding: ${rem(24)};

  & > * + * {
    margin-top: ${rem(24)};
  }
`;

export const CartEmpty = styled.div`
  height: ${rem(188)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
