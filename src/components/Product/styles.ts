import styled from "styled-components";
import media from "styles/media";
import { percent, rem } from "styles/utils";

export const Container = styled.div`
  max-width: ${rem(1110)};
  margin: auto;

  display: flex;
  justify-content: center;
  align-content: center;

  padding-top: ${rem(90)};
  padding-bottom: ${rem(132)};

  @media (max-width: ${media.md}) {
    padding-top: 0;
    padding-bottom: ${rem(88)};
  }
`;

export const Wrapper = styled.div`
  width: ${percent(1015, 1110)};
  height: ${rem(565)};
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${rem(125)};

  @media (max-width: ${media.md}) {
    width: 100%;
    grid-template-columns: 1fr;
    height: initial;
  }
`;
