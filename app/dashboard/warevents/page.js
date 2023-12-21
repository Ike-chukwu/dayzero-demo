import React from "react";
import styles from "../../../styles/war.module.css";
import WarEventSlider from "@/app/components/WarEventSlider/WarEventSlider";
import LootboxSlider from "@/app/components/LootboxSlider/LootboxSlider";

const page = () => {
  return (
    <div className={styles.warContainer}>
      <div className={styles.initialSection}>
        <div className={styles.recentMatchesHeadingPack}>
          <h3 className={styles.heading}>war day wins</h3>
          <div className={styles.chevronPack}>
            <img src="/chevron-left.png" className={styles.navChev} alt="" />
            <img src="/chevron-right.png" className={styles.navChev} alt="" />
          </div>
        </div>
        <div className={styles.carPack}>
          <div
            className={styles.eventCard}
            style={{ borderBottom: ".005rem solid #423250" }}
          >
            <p className={styles.titleOfEvent}>title of event</p>
            <div className={styles.imgContainer}>
              Placement for event illustration
            </div>
            <span className={styles.lastText}>12/02/24 | 00:08:12</span>
            <img src="/purple.png" alt="" className={styles.specialBorder} />
          </div>
          <div
            className={styles.eventCard}
            style={{ borderBottom: ".005rem solid #2F6594" }}
          >
            <p className={styles.titleOfEvent}>title of event</p>
            <div className={styles.imgContainer}>
              Placement for event illustration
            </div>
            <span className={styles.lastText}>12/02/24 | 00:08:12</span>
            <img src="/blue.png" alt="" className={styles.specialBorder} />
          </div>
          <div
            className={styles.eventCard}
            style={{ borderBottom: ".005rem solid #917B05" }}
          >
            <p className={styles.titleOfEvent}>title of event</p>
            <div className={styles.imgContainer}>
              Placement for event illustration
            </div>
            <span className={styles.lastText}>12/02/24 | 00:08:12</span>
            <img src="/yellow.png" alt="" className={styles.specialBorder} />
          </div>
        </div>
        <WarEventSlider />
        <img src="/indicator.png" className={styles.indicator} alt="" />
      </div>

      <div className={styles.lootSection}>
        <h3 className={styles.heading}>loot boxes won</h3>
        <div className={styles.lootBoxesPack}>
          <div className={styles.lootBox}>
            <img src="/lootBox.png" className={styles.box} alt="" />
            <div className={styles.textPack}>
              <h4 className={styles.title}>loot box name</h4>
              <p className={styles.valueText}>$value</p>
            </div>
          </div>
          <div className={styles.lootBox}>
            <img src="/lootBox.png" className={styles.box} alt="" />
            <div className={styles.textPack}>
              <h4 className={styles.title}>loot box name</h4>
              <p className={styles.valueText}>$value</p>
            </div>
          </div>
          <div className={styles.lootBox}>
            <img src="/lootBox.png" className={styles.box} alt="" />
            <div className={styles.textPack}>
              <h4 className={styles.title}>loot box name</h4>
              <p className={styles.valueText}>$value</p>
            </div>
          </div>
          <div className={styles.lootBox}>
            <img src="/lootBox.png" className={styles.box} alt="" />
            <div className={styles.textPack}>
              <h4 className={styles.title}>loot box name</h4>
              <p className={styles.valueText}>$value</p>
            </div>
          </div>
        </div>
      </div>

      <LootboxSlider />
      {/* <div className={styles.matchCard}>
        <img src="/chevron-1.png" className={styles.chev} alt="" />
        <p className={styles.cardContent}>135 total matches</p>
      </div> */}
    </div>
  );
};

export default page;
