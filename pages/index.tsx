import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Addinex</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <main className={styles.main} >
        <h1 className={styles.title}>
          Dashboard{' '}
          <Link href="/add">
            <a className={styles.card}>Add Event +</a>
          </Link>
        </h1>
        <Tabs>
          <TabList>
            <Tab>AGGRID</Tab>
            <Tab>HI-CHART</Tab>
          </TabList>

          <TabPanel>
            <h2>AGGRID RENDER</h2>
          </TabPanel>
          <TabPanel>
            <h2>HI-CHART RENDER</h2>
          </TabPanel>
        </Tabs>
      </main>

      <footer>
        <p>Powered by Chukwuma Azubuike</p>
      </footer>
    </div>
  )
}

export default Home
