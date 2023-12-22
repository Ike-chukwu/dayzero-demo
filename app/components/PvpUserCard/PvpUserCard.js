import React from "react";
import styles from "../../../styles/pvpusercard.module.css";

const PvpUserCard = (props) => {
  return (
    <div className={styles.userCard}>
      <div className={styles.firstPart}>
        <img src={props.imgSrc} className={styles.userImg} alt="" />
        <div className={styles.innerFirstPart}>
          <p className={styles.userName}>
            {props.name}
            <span className={styles.serial}>{props.serial}</span>
          </p>
          <p className={styles.level}>level {props.level}</p>
        </div>
      </div>
      <div className={styles.middlePortion}>
        <div className={styles.mInnerFirstPart}>
          <h2 className={styles.userName}>
            {props.name}
            <span className={styles.serial}>{props.serial}</span>
          </h2>
          <p className={styles.level}>level {props.level}</p>
        </div>
        <div className={styles.deskDiamondPack}>
          {props.dList.map((src) => (
            <img src={src} className={styles.dBadge} alt="" />
          ))}
        </div>
        <div className={styles.playerStats}>
          <div className={styles.categpry}>
            <h4 className={styles.categoryTitle}>total games</h4>
            <p className={styles.number}>{props.tG}</p>
          </div>
          <div className={styles.categpry}>
            <h4 className={styles.categoryTitle}>total wins</h4>
            <p className={styles.win}>{props.tW}</p>
          </div>
          <div className={styles.categpry}>
            <h4 className={styles.categoryTitle}>total losses</h4>
            <p className={styles.loss}>{props.tl}</p>
          </div>
        </div>
        <div className={styles.mobileDiamondPack}>
          {props.dList.map((src) => (
            <img src={src} className={styles.dBadge} alt="" />
          ))}
        </div>
      </div>
      <img src={props.badge} alt="" className={styles.badgeD} />
    </div>
  );
};

export default PvpUserCard;
