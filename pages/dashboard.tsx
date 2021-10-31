import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import AgGrid from './components/ag-grid';
import eventData from './api/queries';
import HighchartsComp from './components/high-charts';
import CustomizedSnackbars from './components/snack-bar';

export default function Dashboard() {

    return (
        <main className={styles.main} >
            <CustomizedSnackbars open={true} />
            <h1 className={styles.title}>
                <div className='fit'>
                    <div>Addinex Portal</div>
                    <Link href="/add-event">
                        <a className={styles.card} style={{ padding: '12px 1rem' }} >Add Event +</a>
                    </Link>
                </div>
            </h1>
            <Tabs>
                <TabList>
                    <Tab><h4>AGGRID</h4></Tab>
                    <Tab><h4>HI-CHART</h4></Tab>
                </TabList>

                <TabPanel>
                    <div className="ag-theme-alpine tab" style={{ width: 610, height: '490px' }}>
                        <AgGrid {...eventData()} />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="ag-theme-alpine tab" style={{ width: '100%' }}>
                        <HighchartsComp {...eventData()} />
                    </div>
                </TabPanel>
            </Tabs>
        </main>
    )
}