import React from "react";
import styles from "../../../styles/levelCard.module.css";

const LevelCard = (props) => {
  return (
    <div className={styles.levelCard}>
      <div style={{ border: props.borderStyle }} className={styles.icon}>
        icon
      </div>
      <div className={styles.levelDetails}>
        <p className={styles.context}>{props.context}</p>
        <p className={styles.level}>{props.level}</p>
      </div>
    </div>
  );
};

export default LevelCard;
