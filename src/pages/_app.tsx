import { AppProps } from "next/app";
import Head from "next/head";
import { CartProvider } from "contexts/CartContext";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globalStyles";
import theme from "styles/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | E-commerce product page</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CartProvider>
          <Component {...pageProps} />
          <div id="root-modal"></div>
        </CartProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
