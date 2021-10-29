import styles from '../styles/Home.module.css'
import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import Footer from './components/footer';
import { useRouter } from 'next/router'
import { GET_EVENTS } from './api/queries';
import LinearIndeterminate from './components/linear-progress';
import moment from 'moment';

const ADD_EVENT = gql`
mutation CreateEventInput($createEvent: CreateEventInput!) {
    createEvent(input: $createEvent){
      id
      value
      timestamp
    }
}
`;

const AddEvent = () => {

    const router = useRouter()

    const [int, setInt] = useState('');

    const [createEvent, { data, loading, error }] = useMutation(ADD_EVENT, {
        refetchQueries: [ //Update local cache after mutation 
            GET_EVENTS,
            'Events'
        ],
    });

    const handleSubmit = (e: any) => {

        e.preventDefault();

        createEvent({
            variables: {
                createEvent: {
                    value: +int,
                    timestamp: moment().unix()
                }
            }
        })

        if (error) console.error(error)

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInt(e.target.value)
    }

    if (loading) return <LinearIndeterminate />;
    if (error) return `Submission error! ${error.message}`;
    if (data) router.push('/') //Redirect to home page

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