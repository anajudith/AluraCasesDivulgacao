import App from "next/app";
import GlobalStyle from "../src/theme/GlobalStyle";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
