import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import AgGrid from './components/ag-grid';
import eventData from './api/queries';
import HighchartsComp from './components/high-charts';

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
                    <div className="ag-theme-alpine" style={{ height: '58vh', width: 602 }}>
                        <AgGrid {...eventData()} />
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>HI-CHART RENDER</h2>
                    <div className="ag-theme-alpine" style={{ height: '58vh', width: '100%' }}>
                        <HighchartsComp {...eventData()} />
                    </div>
                </TabPanel>
            </Tabs>
        </main>
    )
}