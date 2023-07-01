import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portafolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selecTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portafolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portafolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portafolio/application" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  )
}

export default Portafolio