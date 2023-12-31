import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.desc}>Turning Your Idea Into Reality. We Bring together the teams from the global tech industry</p>
        <Button url="/portafolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image className={styles.img} src="/8.jpg" width={500} height={500} alt="foto-general"/>
      </div>
    </div>
  )
}
