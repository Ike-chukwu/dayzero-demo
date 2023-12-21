import React from "react";
import styles from "../../../styles/empty.module.css";

const page = () => {
  return (
    <div className={styles.emptyCotainerParent}>
      <div className={styles.emptyContainer}>
        <img src="/empty.png" className={styles.eIcon} alt="" />

        <div className={styles.text}>
          <h3 className={styles.heading}>No entries yet</h3>
          <p className={styles.brief}>
            You do no have any records from the game yet. Your entries will show
            here when you play
          </p>
        </div>
        <button className={styles.btn}>
          play now
        </button>
      </div>
    </div>
  );
};

export default page;
