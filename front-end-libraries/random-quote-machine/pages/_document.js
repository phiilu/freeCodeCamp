import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument