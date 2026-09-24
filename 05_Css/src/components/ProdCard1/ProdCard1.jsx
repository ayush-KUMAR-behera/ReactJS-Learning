import React from 'react'
import styles from './ProdCard1.module.css'
const ProdCard1 = () => {
  return (
   <div className={styles.card}>
      <div className={styles.itemImage}>🎧</div>
      <h3 className={styles.title}>Wireless Headphones</h3>
      <p className={styles.price}>₹2,999</p>
      <button className={styles.btn}>Add to Cart</button>
    </div>
  )
}

export default ProdCard1
