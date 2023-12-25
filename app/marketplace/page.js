import React from "react";
import styles from "../../styles/marketpage.module.css";
import NftCard from "../components/NftCard/NftCard";

const page = () => {
  return (
    <div className={styles.marketPlaceParent}>
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
      </div>
    </div>
  );
};

export default page;
