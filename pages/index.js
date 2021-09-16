import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

import openApiSpecs from './openapi.json'

export default function Home() {
  useEffect(() => {
    let docEl = document.getElementById("thedoc");
    docEl.loadSpec(openApiSpecs);
  },[])
  return (
    <div className={styles.container}>
      <Head>
        <title>[NOT] Expense Manager | Assignment API</title>
        <meta name="description" content="Expense Manager | Assignment API by Navneet Lal Gupta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        src="https://unpkg.com/rapidoc/dist/rapidoc-min.js"
        strategy="beforeInteractive"
      />
      <rapi-doc
        id="thedoc"
        theme="light"
        primary-color="#AC3931"
        nav-bg-color="#482C3D"
        allow-spec-url-load={false}
        allow-spec-file-load={false}
        show-header={false}
        allow-try={true}
      >
      </rapi-doc>
    </div>
  )
}
