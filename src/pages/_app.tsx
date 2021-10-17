import Center from "components/common/Center";
import { AppProps } from "next/app";
import Head from "next/head";
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
        <Center>
          <Component {...pageProps} />
        </Center>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
