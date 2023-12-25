import React from "react";
import styles from "../../../styles/nftcard.module.css";

const NftCard = (props) => {
  return (
    <div className={styles.nftCard}>
      <img src={props.imgSrc} className={styles.bigImg} alt="" />
      <div className={styles.subSection}>
        <h3 className={styles.cardName}>{props.name}</h3>
        <div
          className={styles.characterTextBg}
          style={{
            color: `${props.color}`,
            border: props.borderColor ? `${props.borderColor}` : "unset",
            background: props.borderColor ? `${props.bgColor}` : "transparent",
          }}
        >
          {props.category}
        </div>
      </div>
      <div className={styles.subSection}>
        <p className={styles.label}>price</p>
        <div className={styles.subSection}>
          <img src="/coin.png" className={styles.coinImg} alt="" />
          <p className={styles.actualPice}>500 dyz</p>
        </div>
      </div>
      <div className={styles.subSection}>
        <div className={styles.characterTextBg}>3h 25m 3s</div>
        <button className={styles.buyContainer}>
          <span className={styles.title}>buy</span>
          <img src="/cart.png" alt="" className={styles.cartImg} />
        </button>
      </div>
    </div>
  );
};

export default NftCard;
