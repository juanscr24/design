import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="/7.jpg" 
          fill={true}  
          alt='imagen japonesa' 
          className={styles.img} 
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Hadcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are  We?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae similique quaerat unde est numquam eveniet itaque voluptate, quae consectetur illo, dolorum ad dolorem eum ullam corrupti repellendus possimus? Fuga, ipsum!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere deleniti consequatur cumque quasi ipsam doloribus alias similique cum nam corporis accusantium culpa, iure sunt fugit incidunt, dolorem optio, tempora reiciendis.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit provident officiis quidem culpa qui exercitationem, laboriosam esse aperiam eum aliquam ipsa. Aut itaque distinctio sequi quas, voluptatem nam vero iure?
          <br />
          <br />
          -Creative Ilustration
          <br />
          <br />
          -Dinamic Websites
          <br />
          <br />
          -Mobile Apps Development
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About