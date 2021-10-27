import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'react-tabs/style/react-tabs.css';
import Dashboard from './dashboard';

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Addinex</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Dashboard />
      <footer>
        <p>Powered by Chukwuma Azubuike</p>
      </footer>
    </div>
  )
}

export default Home