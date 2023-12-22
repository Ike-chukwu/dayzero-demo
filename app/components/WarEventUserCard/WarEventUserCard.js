import React from "react";
import styles from "../../../styles/wareventsuserscard.module.css";

const WarEventUserCard = (props) => {
  return (
    <div className={styles.warCard}>
      <div className={styles.firstPart}>
        <img src={props.userPic} className={styles.userImg} alt="" />
        <div className={styles.innerFirtsPart}>
          <p className={styles.userName}>
            {props.name}
            <span className={styles.serial}>{props.serial}</span>
          </p>{" "}
          <p className={styles.level}>level {props.level}</p>
        </div>
      </div>
      <div className={styles.middlePortion}>
        <div className={styles.mInnerFirstPart}>
          <p className={styles.userName}>
            {props.name}
            <span className={styles.serial}>{props.serial}</span>
          </p>{" "}
          <p className={styles.level}>level {props.level}</p>
        </div>
        <div className={styles.playerStats}>
          <div className={styles.category}>
            <h4 className={styles.categoryTitle}>EVENTS PARTICIPATED IN</h4>
            <p className={styles.number}>{props.events}</p>
          </div>
          <div className={styles.category}>
            <h4 className={styles.categoryTitle}>total wins</h4>
            <p className={styles.win}>{props.tw}</p>
          </div>
        </div>
      </div>
      <div className={styles.lastPart}>
        <div className={styles.categpry}>
          <h4 className={styles.categoryTitle}>total wins</h4>
          <p className={styles.win}>{props.tw}</p>
        </div>
        <img src={props.badge} alt="" className={styles.badge} />
      </div>
      {/* <img src="" alt="" className={styles.badge} /> */}
    </div>
  );
};

export default WarEventUserCard;
