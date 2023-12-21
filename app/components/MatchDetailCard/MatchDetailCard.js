import React from "react";
import styles from "../../../styles/matchDetailCard.module.css";

const MatchDetailCard = () => {
  return (
    <div className={styles.detailCard}>
      <div className={styles.leftArea}>
        <img src="/Limg.png" className={styles.lImg} alt="" />
        <div className={styles.topArea}>
          <div className={styles.smallTextContainer}>
            <p className={styles.smallText}>adedoyin</p>
            <p className={styles.time}>
              15: <span className={styles.red}>10</span>
            </p>
          </div>
          <p className={styles.eventDetails}>12/02/24 | 00:08:12</p>
        </div>
      </div>
      <div className={styles.rightArea}>
        <div className={styles.topArea}>
          <p className={styles.smallText}>K / D / A</p>
          <p className={styles.time}>23 / 12 / 4</p>
        </div>
        <img src="/RImg.png" className={styles.lImg} alt="" />
      </div>
    </div>
  );
};

export default MatchDetailCard;
