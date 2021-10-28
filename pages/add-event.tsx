import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import Footer from './components/footer';
import { useRouter } from 'next/router'

const ADD_EVENT = gql`
mutation CreateEventInput($createEvent: CreateEventInput!) {
    createEvent(input: $createEvent){
      id
      value
      timestamp
    }
}
`;

const AddEvent: NextPage = () => {

    const router = useRouter()

    const [int, setInt] = useState('');

    const [createEvent, { data, loading, error }] = useMutation(ADD_EVENT);

    const handleSubmit = (e) => {

        e.preventDefault();

        createEvent({
            variables: {
                createEvent: {
                    value: +int,
                    timestamp: Math.floor(Date.now() / 1000)
                }
            }
        })

        if (error) console.error(error)

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInt(e.target.value)
    }

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    if (data) {
        console.log('data', data)
        router.push('/')
    }//Redirect to home page

    return (
        <div className={styles.container}>
            <main className={styles.main} style={{ margin: 'auto' }} >
                <form action='submit' onSubmit={handleSubmit} style={{ display: 'grid' }} >
                    <input type='number' placeholder='Enter an integer' onChange={handleChange} style={{ marginTop: '200px', width: '200px' }} required />
                    <button type='submit' className={styles.button}>Add Event +</button>
                </form>
            </main>
            <Footer />
        </div>
    )
}

export default AddEvent