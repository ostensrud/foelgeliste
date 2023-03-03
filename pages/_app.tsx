import "../styles/globals.css";
import "../styles/styles.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { SWRConfig } from "swr";

export const fetcher = (url: string) =>
  fetch(url, { method: "GET", credentials: "include" }).then((res) =>
    res.text()
  );

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SWRConfig
        value={{
          fetcher: fetcher,
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </Layout>
  );
}

export default MyApp;
