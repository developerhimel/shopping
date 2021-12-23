import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="International shopping platform" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossOrigin="anonymous"
          />
          <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        </Head>
        <body className="bg-gray-50">
          <Main />
          <NextScript />
          <script src="./jquery.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
