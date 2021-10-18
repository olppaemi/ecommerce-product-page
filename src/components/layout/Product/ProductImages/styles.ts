import styled from "styled-components";
import media from "styles/media";
import { rem } from "styles/utils";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: ${rem(32)};

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

export const Thumnails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    width: calc(25% - ${rem(31)});
    border-radius: ${rem(10)};
    cursor: pointer;
  }

  &:first-child {
    background-color: white;
  }
`;
