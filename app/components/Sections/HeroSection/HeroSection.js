import React from "react";
import styles from "../../../../styles/layout.module.css";
import Button from "../../Button/Button";
import Navbar from "../../Navbar/Navbar";
import stylesTwo from "../../../../styles/fs.module.css";

const HeroSection = () => {
  return (
    <div className={styles.topPart}>
      <div className={styles.innerHeroSection}>
        <h1 className={`${styles.mainTitle} customFont`}>dayzero</h1>
        <div className={styles.bottomContent}>
          <p className={styles.textBrief}>
            Welcome to Day Zero, where every battle tells a tale, and your
            choices echo through the remnants of a world in turmoil.
          </p>
          <div className={styles.btnPack}>
            <button className={styles.btn}>
              <img style={{ width: "12px" }} src="/apple.png" alt="" />
              iOS
            </button>
            <button className={styles.btn}>
              <img style={{ width: "12px" }} src="/android.png" alt="" />
              android
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
