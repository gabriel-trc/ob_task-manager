import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}