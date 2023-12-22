import React from "react";
import styles from "../../../styles/wareventsuserscard.module.css";

const WarEventUserCard = () => {
  return (
    <div className={styles.warCard}>
      <div className={styles.firstPart}>
        <img src="" className={styles.userImg} alt="" />
        <div className={styles.innerFirtsPart}>
          <h2 className={styles.userName}></h2>
          <p className={styles.level}>level 32</p>
        </div>
      </div>
      <div className={styles.middlePortion}>
        <div className={styles.mInnerFirstPart}>
          <h2 className={styles.userName}></h2>
          <p className={styles.level}>level 32</p>
        </div>
        <div className={styles.playerStats}>
          <div className={styles.categpry}>
            <h4 className={styles.categoryTitle}>EVENTS PARTICIPATED IN</h4>
            <p className={styles.number}>GOJ 24’, DYZERO, BULL’24</p>
          </div>
          <div className={styles.categpry}>
            <h4 className={styles.categoryTitle}>total wins</h4>
            <p className={styles.win}>35</p>
          </div>
        </div>
      </div>
      <div className={styles.lastPart}>
        <div className={styles.categpry}>
          <h4 className={styles.categoryTitle}>total wins</h4>
          <p className={styles.win}>35</p>
        </div>
        <img src="" alt="" className={styles.badge} />
      </div>
      {/* <img src="" alt="" className={styles.badge} /> */}
    </div>
  );
};

export default WarEventUserCard;
