import React from "react";
import styles from "../../../styles/pvestats.module.css";
import MatchDetailCard from "@/app/components/MatchDetailCard/MatchDetailCard";
import LootboxSlider from "@/app/components/LootboxSlider/LootboxSlider";
// import LootBoxSlider from "@/app/components/LootBoxSlider/LootBoxSlider";

const page = () => {
  return (
    <div className={styles.pveParent}>
      <div className={styles.matchCardPack}>
        <div className={styles.matchCard}>
          <img src="/chevron-1.png" className={styles.chev} alt="" />
          <p className={styles.cardContent}>135 total matches</p>
        </div>
        <div className={styles.matchCard}>
          <img src="/chevron-2.png" className={styles.chev} alt="" />
          <p className={styles.cardContent}>135 total matches</p>
        </div>
        <div className={styles.matchCard}>
          <img src="/chevron-3.png" className={styles.chev} alt="" />
          <p className={styles.cardContent}>135 total matches</p>
        </div>
      </div>

      <div className={styles.recentMatchesParent}>
        <div className={styles.recentMatchesHeadingPack}>
          <h3 className={styles.heading}>recent matches</h3>
          <div className={styles.chevronPack}>
            <img src="/chevron-left.png" className={styles.navChev} alt="" />
            <img src="/chevron-right.png" className={styles.navChev} alt="" />
          </div>
        </div>

        <div className={styles.detailsPack}>
          <MatchDetailCard />
          <MatchDetailCard />
          <MatchDetailCard />
          <MatchDetailCard />
          <MatchDetailCard />
          <MatchDetailCard />
          <MatchDetailCard />
          <MatchDetailCard />
          <MatchDetailCard />
          <img src="/indicator.png" className={styles.indicator} alt="" />
        </div>
      </div>
      <div className={styles.lootSection}>
        <h3 className={styles.heading}>loot boxes won</h3>
        <div className={styles.lootBoxesPack}>
          <div className={styles.lootBox}>
            <img src="/lootBox.png" className={styles.box} alt="" />
            <div className={styles.textPack}>
              <h4 className={styles.title}>loot box name</h4>
              <p className={styles.valueText}>arena gotten</p>
            </div>
          </div>
          <div className={styles.lootBox}>
            <img src="/lootBox.png" className={styles.box} alt="" />
            <div className={styles.textPack}>
              <h4 className={styles.title}>loot box name</h4>
              <p className={styles.valueText}>arena gotten</p>
            </div>
          </div>
          <div className={styles.lootBox}>
            <img src="/lootBox.png" className={styles.box} alt="" />
            <div className={styles.textPack}>
              <h4 className={styles.title}>loot box name</h4>
              <p className={styles.valueText}>arena gotten</p>
            </div>
          </div>
          <div className={styles.lootBox}>
            <img src="/lootBox.png" className={styles.box} alt="" />
            <div className={styles.textPack}>
              <h4 className={styles.title}>loot box name</h4>
              <p className={styles.valueText}>arena gotten$value</p>
            </div>
          </div>
        </div>
      </div>
      <LootboxSlider />
    </div>
  );
};

export default page;
