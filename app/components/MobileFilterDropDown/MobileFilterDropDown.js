"use client";
import React, { useState } from "react";
import styles from "../../../styles/mobilefilterdropdown.module.css";
import DesktopFilterCard from "../DesktopFilterCard/DesktopFilterCard";
import { filterOptions } from "@/app/constants";

const MobileFilterDropDown = () => {
  const [isOptionPackDisplaying, displayOptionPack] = useState(false);

  return (
    <div className={styles.realContainer}>
      <div className={styles.innerRealContainer}>
        <div className={styles.filterCategoryParent}>
          <span className={styles.categoryName}>filter results</span>
          <img
            onClick={() => displayOptionPack(!isOptionPackDisplaying)}
            src="/down.png"
            alt=""
            className={
              isOptionPackDisplaying
                ? `${styles.chevIcon} ${styles.activeChev}`
                : `${styles.chevIcon}`
            }
          />
        </div>
        {isOptionPackDisplaying && (
          <div className={styles.innerFilterPack}>
            <div className={styles.childOfInnerFIlter}>
              {filterOptions.map((item, index) => (
                <DesktopFilterCard
                  key={index}
                  title={item.title}
                  aspects={item.aspects}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileFilterDropDown;
