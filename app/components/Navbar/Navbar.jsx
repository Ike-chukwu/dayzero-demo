"use client";
import React, { useState, useEffect } from "react";
import styles from "../../../styles/Navbar.module.css";
import Button from "../Button/Button";

const Navbar = (props) => {
  const [isMenuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html")
    if(html){
      html.style.overflow = isMenuActive? "hidden" : "auto"
    }
  }, [isMenuActive])



  return (
    <nav className={styles.navbar}>
      <img className={styles.orgLogo} src="/logo.png" alt="" />

      <div className={styles.middleIconPack}>
        <img
          src="/discord.png"
          style={{ width: "20px", height: " 20px" }}
          alt=""
        />
        <img
          src="/line.png"
          style={{ width: " 0.5px", height: " 20px", background: "#FBEFC5" }}
          alt=""
        />
        <img
          src="telegram.png"
          style={{ width: " 20px", height: " 20px" }}
          alt=""
        />
        <img
          src="/line.png"
          style={{ width: " 0.5px", height: " 20px", background: "#FBEFC5" }}
          alt=""
        />
        <img src="x.png" style={{ width: " 20px", height: " 20px" }} alt="" />
      </div>

      <div className={styles.btnPack}>
        <Button
          bgColor="white"
          color="black"
          onClick={(e) => {
            e.preventDefault();
            setMenuActive(false);
            props.setWalletOpen(true);
          }}
        >
          my account
        </Button>
        <Button bgColor="#FF3B00" color="white">
          marketplace
        </Button>
      </div>

      <div
        className={
          isMenuActive
            ? `${styles.mobileNav} ${styles.active}`
            : `${styles.mobileNav}`
        }
      >
        <img
          src="/close.png"
          className={styles.closeBtn}
          alt=""
          onClick={() => setMenuActive(false)}
        />

        <div className={styles.routes}>
          <p
            className={styles.route}
            onClick={() => {
              setMenuActive(false);
              props.setWalletOpen(true);
            }}
          >
            my account
          </p>
          <p className={styles.route}>marketplace</p>
        </div>

        <div className={styles.socials}>
          <p className={styles.social}>discord</p>
          <p className={styles.social}>telegram</p>
          <p className={styles.social}>twitter</p>
        </div>
      </div>

      <img
        src="/Menu.png"
        alt=""
        className={styles.menu}
        onClick={() => setMenuActive(true)}
      />
    </nav>
  );
};

export default Navbar;
