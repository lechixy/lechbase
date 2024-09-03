import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="theme-color" content="#00fff8"></meta>
                    <meta property="og:title" content="lechixy react base"></meta>
                    <meta property="og:image" content="https://localhost:3000/favicon.ico"></meta>
                </Head>
                <NextScript />
                <body>
                    <Main />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
