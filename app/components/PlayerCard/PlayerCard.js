import React from "react";
import styles from "../../../styles/playerCard.module.css";

const PlayerCard = (props) => {
  
  return (
    <div className={styles.card}>
      <div className={styles.leftSide}>
        <div className={styles.topPart}>
          <h2 className={styles.cardTitle}>card name</h2>
          <div className={styles.innerSpan}>
            <span className={styles.action}>played </span>
            <span className={styles.playValue}>235H12M</span>
          </div>
        </div>
        <div className={styles.gameStats}>
          <div className={styles.gamStatsRow}>
            <div className={styles.titlePack}>
              <p className={styles.category}>type</p>
              <p className={styles.score}>62.11%</p>
            </div>
            <div className={styles.titlePack}>
              <p className={styles.category}>attack type</p>
              <p className={styles.score}>62.11%</p>
            </div>
            <div className={styles.titlePack}>
              <p className={styles.category}>serum value</p>
              <p className={styles.score}>62.11%</p>
            </div>
          </div>
          <div className={styles.gamStatsRow}>
            <div className={styles.titlePack}>
              <p className={styles.category}>level</p>
              <p className={styles.score}>62.11%</p>
            </div>
            <div className={styles.titlePack}>
              <p className={styles.category}>xp</p>
              <p className={styles.score}>62.11%</p>
            </div>
            <div className={styles.titlePack}>
              <p className={styles.category}>health point</p>
              <p className={styles.score}>62.11%</p>
            </div>
          </div>
          <p className={styles.lastHeading}>more details</p>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img src="/Man1.png" className={styles.manImg} alt="" />
      </div>
    </div>
  );
};

export default PlayerCard;
