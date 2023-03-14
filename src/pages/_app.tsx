import "faust.config";
import { FaustProvider } from "@faustjs/next";
// import 'normalize.css/normalize.css'
import React from "react";
// import 'scss/main.scss'
import { client } from "client";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import globalStyles from "styles/global-styles";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "lib/constants";
import { DefaultSeo } from "next-seo";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <FaustProvider client={client} pageProps={pageProps}>
        <DefaultSeo
          titleTemplate={`%s - ${SITE_NAME}`}
          defaultTitle={SITE_NAME}
          description={SITE_DESCRIPTION}
          openGraph={{
            type: "website",
            locale: "es_DO",
            url: SITE_URL,
            site_name: SITE_NAME,
          }}
          twitter={{
            handle: "@Universidad_ISA",
            site: "@Universidad_ISA",
            cardType: "summary_large_image",
          }}
        />
        <Global styles={globalStyles} />

        <Component {...pageProps} />
      </FaustProvider>
    </>
  );
}
