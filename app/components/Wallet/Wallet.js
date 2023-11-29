import React from "react";
import styles from "../../../styles/wallet.module.css";

const Wallet = () => {
  return (
    <div className={styles.walletParent}>
      <div className={styles.walletBtnPack}>
        <div className={styles.topSection}>
          <h2 className={styles.heading}>connect your wallet</h2>
          <p className={styles.brief}>
            To continue, connect to a wallet. If you dont have a wallet, you can
            select a provider to create one
          </p>
        </div>
        <div className={styles.topSection}>
          <button className={styles.btn}>
            <img className={styles.icon} src="/meta.png" alt="" />
            metamask
          </button>
          <button className={styles.btn}>
            <img className={styles.icon} src="/coinbaseIcon.png" alt="" />
            coinbase wallet
          </button>
          <button className={styles.btnCenter}>show more options</button>
        </div>
        <button className={styles.orangeBtn}>connect wallet</button>
      </div>
    </div>
  );
};

export default Wallet;
