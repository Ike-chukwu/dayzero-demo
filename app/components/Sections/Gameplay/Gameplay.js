import React from "react";
import styles from "../../../../styles/gameplay.module.css";

const Gameplay = () => {
  return (
    <div className={styles.gameplayParent}>
      <section className={styles.gameplayContainer}>
        <h1 className={styles.mainHeading}>
          more <br /> than a <br />
          game
        </h1>
        <div className={styles.bottomContent}>
          <p className={styles.textBrief}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            sint numquam, vel molestiae fugit maxime quos ex molestias unde ab,
            porro ratione provident eum perferendis!
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
