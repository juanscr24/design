import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.texts}>
        <h1>Better design for your digital products</h1>
      </div>
      <div className={styles.imgContainer}></div>
      <Image src="/8.jpg" width={500} height={500} alt="foto-general"/>
    </div>
  )
}
