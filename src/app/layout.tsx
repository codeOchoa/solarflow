// _document.tsx en Next.js (para estructura optimizada)
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es" data-bs-theme="light">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="profile" content="https://github.com/codeOchoa" />
        <meta name="copyright" content="codeOchoa" />
        <meta name="description" content="Tienda especializada en cerámica y velas de soja aromáticas." />
        <meta name="keywords" content="cerámica, velas, soja" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icons/logo.svg" />
        <link rel="stylesheet" href="/css/main.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/js/main.js" defer></script>
      </body>
    </Html>
  );
}