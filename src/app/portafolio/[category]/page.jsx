import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button';
import Image from 'next/image';

const Category = ({params}) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus aspernatur distinctio neque, tenetur facilis quis similique autem excepturi animi repellat natus expedita quo, veritatis laborum nesciunt minus quas! Suscipit, nostrum?</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img} 
            fill={true} 
            src="/miguel.jpg" 
            alt='obra de miguel' 
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto totam saepe, soluta quis quidem esse maiores accusantium! Veritatis voluptate iure adipisci suscipit perferendis minus velit cupiditate repellendus, quas molestias.</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img} 
            fill={true} 
            src="/miguel.jpg" 
            alt='obra de miguel' 
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque consectetur, ad voluptate in fuga voluptates consequatur minima recusandae sequi aliquam laborum illo natus, repellendus aspernatur dicta culpa. Iste, itaque!</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img} 
            fill={true} 
            src="/miguel.jpg" 
            alt='obra de miguel' 
          />
        </div>
      </div>
    </div>
  )
}

export default Category