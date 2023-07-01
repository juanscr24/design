import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit suscipit?
          </h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam earum temporibus voluptatibus. Repudiandae esse sapiente dolorem reprehenderit debitis incidunt vel ut quaerat cum assumenda aliquam, rerum exercitationem nostrum. Sequi, nam.
          </p>
          <div className={styles.author}>
            <Image
              src="/miguel.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Juan Cardona</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/miguel.jpg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita repellendus fugiat assumenda. Ea ipsa praesentium unde qui quasi, distinctio voluptatem cumque labore voluptatibus libero doloribus error ab nisi earum!
         <br />
         <br />
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni laboriosam incidunt provident nihil cumque, dolorem molestiae doloremque facere sit fugiat dignissimos asperiores unde impedit totam? Ab soluta sint distinctio corporis?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;