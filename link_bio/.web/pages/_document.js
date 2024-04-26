/** @jsxImportSource @emotion/react */


import { Head, Html, Main, NextScript } from "next/document"
import Script from "next/script"



export default function Document() {
  return (
    <Html lang={`en`}>
  <Head>
  <Script src={`https://www.googletagmanager.com/gtag/js?id=G-MFEQYK7KS`} strategy={`afterInteractive`}/>
  <Script strategy={`afterInteractive`}>
  {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js',new Date());
              gtag('config','G-MFEQYK7KS');
              `}
</Script>
</Head>
  <body>
  <Main/>
  <NextScript/>
</body>
</Html>
  )
}
