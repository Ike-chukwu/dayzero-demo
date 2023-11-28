import React from "react";
import styles from "../../../../styles/heroSection.module.css";
import Button from "../../Button/Button";
import Navbar from "../../Navbar/Navbar";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.innerHeroSection}>
        <h1 className={styles.mainTitle}>dayzero</h1>

        <div className={styles.bottomContent}>
          <p className={styles.textBrief}>
            THIS TEXT WILL HOUSE AN INTRO TO THIS GAME’S STORY. BRIEF YET
            AROUSING CURIOSITY
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
    </section>
  );
};

export default HeroSection;
