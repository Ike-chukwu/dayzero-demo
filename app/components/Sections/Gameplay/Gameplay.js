import React from "react";
import styles from "../../../../styles/gameplay.module.css";

const Gameplay = () => {
  return (
    <div className={styles.gameplayParent}>
      <section className={styles.gameplayContainer}>
        <h1 className={styles.mainHeading}>
          where <br /> gaming meets <br />
          reality
        </h1>
        <div className={styles.bottomContent}>
          <p className={styles.textBrief}>
            Experience a unique blend of strategy and action. Plan your moves,
            deploy your troops, and outsmart your opponents to claim victory.
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
      </section>
    </div>
  );
};

export default Gameplay;
