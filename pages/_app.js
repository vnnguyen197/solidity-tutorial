import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import MetaMaskAccountProvider from '../components/meta-mask-account-provider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MetaMaskAccountProvider>
      <Head>
        <title>
          Solid Solidity
        </title>
      </Head>
      <Toaster />
      <Component {...pageProps} />
    </MetaMaskAccountProvider>
  )
}

export default MyApp