import React from "react";
import styles from "../../../../styles/market.module.css";

const Market = () => {
  return (
    <div className={styles.marketParent}>
      <div className={styles.marketSection}>
        <div className={styles.leftMarketPlace}>
          <div className={styles.initialPart}>
            <img src="/blackarrow.png" className={styles.blackArrow} alt="" />
            <p className={styles.briefText}>
              Day Zero: Unleash the Future, Survive the Present, Shape Your
              Destiny.
            </p>
          </div>
          <button className={styles.btnTwo}>buy dyz</button>
        </div>
        <div className={styles.rightMarketPlace}>
          <div className={styles.innerRight}>
            <div className={styles.categoryPack}>
              <p className={styles.category}>marketplace</p>
              <p className={styles.category}>community</p>
              <p className={styles.category}>assets</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.leftCategory}>
          <div className={styles.spanCover}>
            <p className={styles.leftBox}>discord</p>
          </div>
          <div className={styles.spanCover}>
            <p className={styles.leftBox}>telegram</p>
          </div>
          <div className={styles.spanCover}>
            <p className={styles.leftBox}>twitter</p>
          </div>
        </div>
        <div className={styles.rightCategory}>
          <span className={styles.rightEdge}>
            © 2023 DAYZERO – ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
    </div>
  );
};

export default Market;
