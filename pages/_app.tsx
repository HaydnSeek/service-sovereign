import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './header'
import Footer from './footer'

function MyApp({ Component, pageProps }: AppProps) {
  return <><Header/><Component {...pageProps} /><Footer/></>
}

export default MyApp
