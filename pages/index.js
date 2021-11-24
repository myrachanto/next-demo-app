import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>The blog| home</title>
      <meta name="keywords" content="vamos a bailar"/>
    </Head>
    <div className={styles.title}>
    <div className={styles.text}>
      <h2> header one</h2>
      <p>home page</p>
    </div>
    </div>
    </>
  )
}
