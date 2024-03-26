import { AppProps } from 'next/app'
import { Slide, ToastContainer } from 'react-toastify';
import { ProviderStore } from '@/store/provider'

import { Layout } from '@/components/Layout';

import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.scss'
import '../styles/reset.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderStore>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer
          transition={Slide}
          hideProgressBar={true}
          position='bottom-center'
          draggableDirection='y'
          theme='colored'
        />
      </Layout>
    </ProviderStore>
  )
}