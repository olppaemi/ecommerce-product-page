import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      basic: string;
    };
    colors: {
      orange: string;
      paleOrange: string;
      veryVarkBlue: string;
      darkGrayishBlue: string;
      grayishBlue: string;
      lightGrayishBlue: string;
      white: string;
      black: string;
    };
  }
}
