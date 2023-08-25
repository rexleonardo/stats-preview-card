import React from "react";
import Image from "next/image";

import styles from "./page.module.scss";

import NumberedContext from "./components/NumberedContext/NumberedContext";

import imageHeader from "../../public/images/image-header-desktop.jpg";

const Home = () => {
  return (
    <main className={styles.mainContainer}>
      <Image src={imageHeader} className={styles.image} alt={""} />
      <div className={styles.content}>
        <div className={styles.title}>
          Get <span className={styles.titleHighlight}>insights</span> that help
          your business grow.
        </div>
        <div className={styles.subtitle}>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </div>
        <div className={styles.numberedContextContainer}>
          <NumberedContext numberedText={"10k+"} text={"companies"} />
          <NumberedContext numberedText={"314"} text={"templates"} />
          <NumberedContext numberedText={"12M+"} text={"queries"} />
        </div>
      </div>
    </main>
  );
};

export default Home;
