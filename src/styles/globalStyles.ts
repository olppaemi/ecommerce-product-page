import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const globalStyle = css`
  ${reset}

  *, 
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.basic};
    font-weight: 600;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyle;
