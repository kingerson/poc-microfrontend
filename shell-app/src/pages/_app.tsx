import { AppProps } from 'next/app'
import RootLayout from '@/components/Layout/Layout'
import './globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}