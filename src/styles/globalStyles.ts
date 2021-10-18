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

  body {
    min-height: 100vh;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    border: none;
    background: none;
    appearance: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .a11y-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0 0);
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
    color: ${({ theme }) => theme.colors.veryVarkBlue};
  }

  h3 {
    font-size: ${rem(13)};
    font-weight: bold;
    line-height: 100%;
    text-transform: uppercase;
    letter-spacing: ${rem(2)};
    color: ${({ theme }) => theme.colors.orange};
  }

  h4 {
    font-size: ${rem(16)};
    font-weight: bold;
    line-height: ${rem(26)};
    color: ${({ theme }) => theme.colors.grayishBlue};
    text-decoration: line-through;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.basic};
    font-size: ${rem(16)};
    line-height: ${rem(26)};
    color: ${({ theme }) => theme.colors.darkGrayishBlue};

    @media (max-width: ${media.md}) {
      font-size: ${rem(15)};
      line-height: ${rem(25)};
      letter-spacing: 0;
    }
  }

  nav {
    font-size: ${rem(15)};

    li {
      &:hover {
        color: ${({ theme }) => theme.colors.veryVarkBlue};
      }
    }

    @media (max-width: ${media.md}) {
      font-size: ${rem(18)};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.veryVarkBlue};
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle};
  ${typography};
`;

export default GlobalStyle;
