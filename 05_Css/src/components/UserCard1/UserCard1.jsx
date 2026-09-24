import React from 'react'

import styles from './UserCard1.module.css'

const UserCard1 = () => {
  return (
    <div className={styles.card}>
        <div className={styles.avatar}>🧑‍💻</div>
        <h3 className={styles.title}>Ayush Kumar</h3>
        <p className={styles.subtitle}>Java Full Stack Dev(AI)</p>
        <button className={styles.btn}>Follow</button>
    </div>
  )
}

export default UserCard1
