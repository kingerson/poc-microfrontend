import { dmsans } from '@/fonts'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={dmsans.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}