import '@/styles/globals.css'
import styles from '@/styles/App.module.css'

import Head from 'next/head'
import Header from "../components/Header"

import type { AppProps } from 'next/app'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return <main>
    <Head>
      <title>SP.shop</title>
      <meta name="description" content="Generated by create next app" />
    </Head>
    
    <div className={styles.container && roboto.className}>
      <Header/>
      <Component {...pageProps} />
    </div>
  </main>
}
