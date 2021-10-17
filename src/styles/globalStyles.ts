import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import { rem } from "./utils";
import media from "./media";

const globalStyle = css`
  ${reset}

  *, 
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    border: none;
    background: none;
    appearance: none;
    cursor: pointer;
  }
`;

const typography = css`
  h1 {
    font-size: ${rem(44)};
    font-weight: bold;
    line-height: ${rem(48)};
    letter-spacing: 0;
    color: ${({ theme }) => theme.colors.veryVarkBlue};

    @media (max-width: ${media.md}) {
      font-size: ${rem(28)};
      line-height: ${rem(32)};
    }
  }

  h2 {
    font-size: ${rem(28)};
    font-weight: bold;
    line-height: ${rem(48)};
    letter-spacing: 0;
  }

  h3 {
    font-size: ${rem(13)};
    font-weight: bold;
    line-height: 100%;
    transform: uppercase;
    letter-spacing: ${rem(2)};
    color: ${({ theme }) => theme.colors.orange};
  }

  body {
    font-family: ${({ theme }) => theme.fonts.basic};
    font-size: ${rem(16)};
    line-height: ${rem(26)};
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle};
  ${typography};
`;

export default GlobalStyle;
