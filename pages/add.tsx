import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useMutation } from '@apollo/client';
import { ADD_EVENT } from './api/mutations';
import { useState } from 'react';

const Add: NextPage = () => {

    const [int, setInt] = useState('');

    const [createEvent, { data, loading, error }] = useMutation(ADD_EVENT);

    const handleClick = () => {

        createEvent({
            variables: {
                value: int,
                timestamp: Math.floor(Date.now() / 1000)
            }
        })

        if (error) console.error(error)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInt(e.target.value)
    }

    return (
        <div className={styles.container}>
            <main className={styles.main} >
                <input type='number' placeholder='Int value' onChange={handleChange} />
                <h1 className={styles.title}>
                    <Link href="/">
                        <a onClick={handleClick} className={styles.card}>Add Event +</a>
                    </Link>
                </h1>
            </main>
        </div>
    )
}

export default Add