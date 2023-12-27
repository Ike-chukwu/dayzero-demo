"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/marketpage.module.css";
import NftCard from "../components/NftCard/NftCard";
import Market from "../components/Sections/Market/Market";
import Link from "next/link";

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

  const newCards = [11, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={styles.marketPlaceParentTwo}>
      <div className={styles.innerMarketPlace}>
        <section className={styles.marketPlaceContainer}>
          <div className={styles.marketPlaceImageCarrier}>
            <img className={styles.marketImg} src="/Mimage.png" alt="" />
            <img
              className={styles.marketImgMobile}
              src="/mMarketpng.png"
              alt=""
            />
          </div>
          <div className={styles.nftStatsParent}>
            <div className={styles.nftStatsSubParent}>
              <div className={styles.nftStatCategories}>
                <div className={styles.nftInnerStatCategories}>
                  <span className={`${styles.stat} ${styles.activeStat}`}>
                    last min
                  </span>
                  <span className={styles.stat}>7 days</span>
                  <span className={styles.stat}>30 days</span>
                  <span className={styles.stat}>all</span>
                </div>
              </div>

              <div className={styles.statsInfoContainer}>
                <div className={styles.statsInfo}>
                  <div className={styles.info}>
                    <img src="/chart.png" alt="" className={styles.img} />
                    <div className={styles.littleContent}>
                      <p className={styles.topText}>total listed</p>
                      <p className={styles.num}>306</p>
                    </div>
                  </div>
                  <img src="/lineM.png" className={styles.line} alt="" />
                  <div className={styles.info}>
                    <img src="/sChart.png" alt="" className={styles.img} />
                    <div className={styles.littleContent}>
                      <p className={styles.topText}>TRANSACTION VOLUME (DYZ)</p>
                      <p className={styles.num}>1,950,340</p>
                    </div>
                  </div>
                  <img src="/lineM.png" className={styles.line} alt="" />
                  <div className={styles.info}>
                    <img src="/rChart.png" alt="" className={styles.img} />
                    <div className={styles.littleContent}>
                      <p className={styles.topText}>ITEMS TRADED</p>
                      <p className={styles.num}>1,006</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.nftCardsCoontainer}>
            <div className={styles.innerSecondPart}>
              <h3 className={styles.heading}>recent listing</h3>
              <button className={styles.promptBtn}>see all listing</button>
            </div>
            <div className={styles.mainNftCardContainer}>
              {/* {newCards.map((slug) => ( */}
              <Link href={`/marketplace/${encodeURIComponent(1)}`}>
                <NftCard
                  imgSrc="/ilus.png"
                  name="card one"
                  category="character"
                  color="#FFEF8F"
                  borderColor="0.1px solid #FFEF8F"
                  bgColor=" rgba(255, 239, 143, 0.20)"
                />
              </Link>
              {/* ))} */}
              <NftCard
                imgSrc="/ilus.png"
                name="card one"
                category="character"
                color="#00B055"
                borderColor=" 0.1px solid #00B055"
                bgColor="rgba(5, 41, 37, 0.50"
              />
              <NftCard imgSrc="/halfFlag.png" name="card one" />
              <NftCard
                imgSrc="/girlImg.png"
                name="card one"
                category="character"
                color="#4CABFF"
                borderColor=" 0.1px solid #4CABFF"
                bgColor="rgba(19, 33, 46, 0.50)"
              />
              <NftCard
                imgSrc="/ilus.png"
                name="card one"
                category="character"
                color="#FFEF8F"
                borderColor="0.1px solid #FFEF8F"
                bgColor=" rgba(255, 239, 143, 0.20)"
              />
              <NftCard
                imgSrc="/ilus.png"
                name="card one"
                category="character"
                color="#00B055"
                borderColor=" 0.1px solid #00B055"
                bgColor="rgba(5, 41, 37, 0.50"
              />
              <NftCard imgSrc="/halfFlag.png" name="card one" />
              <NftCard
                imgSrc="/girlImg.png"
                name="card one"
                category="character"
                color="#4CABFF"
                borderColor=" 0.1px solid #4CABFF"
                bgColor="rgba(19, 33, 46, 0.50)"
              />
            </div>
          </div>
          <div className={styles.nftCardsCoontainer}>
            <div className={styles.innerSecondPart}>
              <h3 className={styles.heading}>recent purchases</h3>
              <div className={styles.chevronPack}>
                <img
                  src="/chevron-left.png"
                  className={styles.navChev}
                  alt=""
                />
                <img
                  src="/chevron-right.png"
                  className={styles.navChev}
                  alt=""
                />
              </div>{" "}
            </div>
            <div className={styles.mainNftCardContainer}>
              <NftCard
                imgSrc="/ilus.png"
                name="card one"
                category="character"
                color="#FFEF8F"
                borderColor="0.1px solid #FFEF8F"
                bgColor=" rgba(255, 239, 143, 0.20)"
              />
              <NftCard
                imgSrc="/ilus.png"
                name="card one"
                category="character"
                color="#00B055"
                borderColor=" 0.1px solid #00B055"
                bgColor="rgba(5, 41, 37, 0.50"
              />
              <NftCard imgSrc="/halfFlag.png" name="card one" />
              <NftCard
                imgSrc="/girlImg.png"
                name="card one"
                category="character"
                color="#4CABFF"
                borderColor=" 0.1px solid #4CABFF"
                bgColor="rgba(19, 33, 46, 0.50)"
              />
              <NftCard
                imgSrc="/ilus.png"
                name="card one"
                category="character"
                color="#FFEF8F"
                borderColor="0.1px solid #FFEF8F"
                bgColor=" rgba(255, 239, 143, 0.20)"
              />
              <NftCard
                imgSrc="/ilus.png"
                name="card one"
                category="character"
                color="#00B055"
                borderColor=" 0.1px solid #00B055"
                bgColor="rgba(5, 41, 37, 0.50"
              />
              <NftCard imgSrc="/halfFlag.png" name="card one" />
              <NftCard
                imgSrc="/girlImg.png"
                name="card one"
                category="character"
                color="#4CABFF"
                borderColor=" 0.1px solid #4CABFF"
                bgColor="rgba(19, 33, 46, 0.50)"
              />
            </div>
          </div>
        </section>
        {showFooter && <Market />}
      </div>
    </div>
  );
};

export default Page;
