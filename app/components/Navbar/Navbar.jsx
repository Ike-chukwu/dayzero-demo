import React from "react";
import styles from "../../../styles/Navbar.module.css";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.orgLogo}></div>

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
        <Button bgColor="white" color="black">
          my account
        </Button>
        <Button bgColor="#FF3B00" color="white">
          marketplace
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
