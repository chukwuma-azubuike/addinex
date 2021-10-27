import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from '../styles/Home.module.css'
import EventData from './api/queries';
import Link from 'next/link'

export default function Dashboard() {
    return (
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
                    <EventData />
                </TabPanel>
            </Tabs>
        </main>
    )
}