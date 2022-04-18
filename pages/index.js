import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from 'react-bootstrap'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HugoLlaves Cerrajero</title>
        <meta name="HugoLlaves" content="cerrjero 24 hoas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button variant="primary">Primary</Button>
     
    </div>
  )
}
