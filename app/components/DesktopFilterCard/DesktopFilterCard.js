"use client";
import React, { useState } from "react";
import styles from "../../../styles/desktopfiltercomponent.module.css";

const DesktopFilterCard = ({ title, aspects }) => {
  const [areOptionSShowing, showOptions] = useState(false);

  return (
    <div
      className={
        areOptionSShowing
          ? `${styles.filterCategory} ${styles.activate}`
          : `${styles.filterCategory}`
      }
    >
      <div
        className={
          areOptionSShowing
            ? `${styles.topPart} ${styles.activeTopPart}`
            : `${styles.topPart}`
        }
      >
        <span className={styles.categoryName}>{title}</span>
        <img
          onClick={() => showOptions(!areOptionSShowing)}
          src="/down.png"
          alt=""
          className={
            areOptionSShowing
              ? `${styles.chevIcon} ${styles.activeChev}`
              : `${styles.chevIcon}`
          }
        />
      </div>
      <div className={styles.bottomSection}>
        {aspects.map((aspect, index) => (
          <div key={index} className={styles.remainingPart}>
            <span className={styles.subCategoryName}>{aspect}</span>
            <input type="checkbox" className={styles.checkBox} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopFilterCard;
