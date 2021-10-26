import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Add: NextPage = () => {

    const handleClick = () => {
        let timestamp = Math.floor(Date.now() / 1000)
        console.log(timestamp)
        alert(timestamp)
    }

    return (
        <div className={styles.container}>
            <main className={styles.main} >
                <input type='number' placeholder='Int value' />
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