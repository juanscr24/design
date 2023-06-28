import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Lamamia. All rights reserved.</div>
      <div>
        <div className={styles.social}>
          <Image src="/1.svg" width={15} height={15} className={styles.icon} alt="Lama dev facebook" />
          <Image src="/2.svg" width={15} height={15} className={styles.icon} alt="Lama dev instagram" />
          <Image src="/3.svg" width={15} height={15} className={styles.icon} alt="Lama dev youtube" />
          <Image src="/4.svg" width={15} height={15} className={styles.icon} alt="Lama dev twitter" />
        </div>
      </div>
    </div>
  );
};

export default Footer