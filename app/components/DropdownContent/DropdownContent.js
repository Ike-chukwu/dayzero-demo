"use client";
import { useState } from "react";
import React from "react";
import styles from "../../../styles/dropdown.module.css";


const DropdownContent = (props) => {
  const [isDropDownActive, setDropdownActive] = useState(false);

  return (
    <div
      className={styles.accordianUnit}
      style={{
        borderLeft: isDropDownActive ? ".5rem solid #F7CB7D" : "none",
      }}
    >
      <div className={styles.acordionQuestion}>
        <h4 className={styles.accordionTitle}>{props.question}</h4>
        <span className={styles.accordionDate}>{props.date}</span>
        <span
          className={styles.coloredText}
          style={{ color: isDropDownActive ? "red" : "white" }}
        >
          {props.qPos}
        </span>
        <img
          src="/chevron-down.png"
          className={
            isDropDownActive
              ? `${styles.chevronDown} ${styles.activeChevron}`
              : `${styles.chevronDown}`
          }
          onClick={() => setDropdownActive(!isDropDownActive)}
          alt=""
        />
      </div>

      <div
        className={
          isDropDownActive
            ? `${styles.accodionAnswer} ${styles.active}`
            : `${styles.accodionAnswer}`
        }
      >
        <div className={styles.accordionBriefParent}>
          <p className={styles.accordionBrief}>{props.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default DropdownContent;
