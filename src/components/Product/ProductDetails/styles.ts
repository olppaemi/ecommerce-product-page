import styled from "styled-components";
import media from "styles/media";
import { percent, rem } from "styles/utils";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  @media (max-width: ${media.md}) {
    display: block;
    width: ${percent(327, 375)};
    margin: auto;
  }
`;

export const Wrapper = styled.div`
  h3 {
    margin-bottom: ${rem(28)};
  }
  h1 {
    margin-bottom: ${rem(32)};
  }
  p {
    margin-bottom: ${rem(24)};
  }
  h2 {
    margin-bottom: ${rem(10)};
  }
`;

export const Badge = styled.span`
  margin-left: ${rem(16)};
  padding: ${rem(4)} ${rem(8)};

  height: ${rem(27)};
  font-size: ${rem(16)};
  line-height: 100%;
  color: ${({ theme }) => theme.colors.orange};
  background-color: ${({ theme }) => theme.colors.paleOrange};
  border-radius: ${rem(6)};
`;

export const PriceWrapper = styled.div`
  margin-bottom: ${rem(32)};

  @media (max-width: ${media.md}) {
    margin-bottom: ${rem(26)};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  column-gap: ${rem(16)};

  @media (max-width: ${media.md}) {
    grid-template-columns: 1fr;
    row-gap: ${rem(16)};
  }
`;
