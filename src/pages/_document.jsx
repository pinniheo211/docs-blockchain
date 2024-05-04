import { Analytics } from "@vercel/analytics/react";
import Document, { Head, Html, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          {/* <Analytics /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
