"use client";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/nftcarddetails.module.css";
import Market from "@/app/components/Sections/Market/Market";

const Page = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Set the condition based on the screen size where you want to show the footer
      setShowFooter(window.innerWidth <= 855); // Show footer when screen size is 855px and below
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.detailContainer}>
      <section className={styles.detailWrapper}>
        <img src="/chevron-left.png" className={styles.navChev} alt="" />
        <div className={styles.innerDetailWrapper}>
          <div className={styles.topSection}>
            <div className={styles.leftSide}>
              <img src="/ilus.png" className={styles.floatImg} alt="" />
            </div>
            <div className={styles.rightSide}>
              <h3 className={styles.cardHeading}>card one title</h3>
              <div className={styles.characterCategoryPack}>
                <div className={styles.character}>
                  <img src="/blank.png" className={styles.cImg} alt="" />
                  <div className={styles.text}>
                    <p className={styles.smallText}>skin rarity</p>
                    <p className={styles.bigText}>normal</p>
                  </div>
                </div>
                <img src="/lineM.png" className={styles.line} alt="" />

                <div className={styles.character}>
                  <img src="/blank.png" className={styles.cImg} alt="" />
                  <div className={styles.text}>
                    <p className={styles.smallText}>hello rarity</p>
                    <p className={styles.bigText}>rarity</p>
                  </div>
                </div>
                <img src="/lineM.png" className={styles.line} alt="" />

                <div className={styles.character}>
                  <img src="/blank.png" className={styles.cImg} alt="" />
                  <div className={styles.text}>
                    <p className={styles.smallText}>hero class</p>
                    <p className={styles.bigText}>marksman</p>
                  </div>
                </div>
              </div>
              <div className={styles.cardPrice}>
                <img src="/coin.png" className={styles.coinImg} alt="" />
                <h3 className={styles.cardWorth}>500 dyz</h3>
                <p className={styles.minorText}>~2.35 usd</p>
              </div>
              <button className={styles.buyBtn}>
                buy now{" "}
                <img src="/cart.png" alt="" className={styles.cartImg} />
              </button>
            </div>
          </div>

          <div className={styles.bottomSection}>
            <div className={styles.cardInfo}>
              <div className={styles.coloredLine}></div>
              <p className={styles.title}>card information & stats</p>
            </div>
            <p className={styles.brief}>
              A weapon expert,has a very rebellious personality and always
              create chaos at everywhere he goes. He joined Metal Outlaws
              because this organization was suitable for his lifestyle. (This is
              dummy data, this will house a basic summary of the card)
            </p>
            <div className={styles.statsContainer}>
              <div className={styles.pStat}>
                <p className={styles.statHead}>TYPE</p>
                <p className={styles.number}>62.11%</p>
              </div>
              <div className={styles.pStat}>
                <p className={styles.statHead}>attack type</p>
                <p className={styles.number}>62.11%</p>
              </div>
              <div className={styles.pStat}>
                <p className={styles.statHead}>serum value</p>
                <p className={styles.number}>62.11%</p>
              </div>
              <div className={styles.pStat}>
                <p className={styles.statHead}>attack radius</p>
                <p className={styles.number}>62.11%</p>
              </div>
              <div className={styles.pStat}>
                <p className={styles.statHead}>attack type</p>
                <p className={styles.number}>62.11%</p>
              </div>
              <div className={styles.pStat}>
                <p className={styles.statHead}>base tower damage</p>
                <p className={styles.number}>62.11%</p>
              </div>
              <div className={styles.pStat}>
                <p className={styles.statHead}>current tower damage</p>
                <p className={styles.number}>62.11%</p>
              </div>
              <div className={styles.pStat}>
                <p className={styles.statHead}>level</p>
                <p className={styles.number}>62.11%</p>
              </div>
              <div className={styles.pStat}>
                <p className={styles.statHead}>xp</p>
                <p className={styles.number}>62.11%</p>
              </div>
              <div className={styles.pStat}>
                <p className={styles.statHead}>health point</p>
                <p className={styles.number}>62.11%</p>
              </div>
              <div className={styles.pStat}>
                <p className={styles.statHead}>current damage</p>
                <p className={styles.number}>62.11%</p>
              </div>
              <div className={styles.pStat}>
                <p className={styles.statHead}>base damage</p>
                <p className={styles.number}>62.11%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showFooter && <Market />}
    </div>
  );
};

export default Page;
