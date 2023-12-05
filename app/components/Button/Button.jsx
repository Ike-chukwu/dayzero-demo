import React from "react";
import styles from "../../../styles/button.module.css";
import stylesTwo from "../../../styles/fs.module.css";

const Button = ({ children, color, bgColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles.btnFont}`}
      style={{ backgroundColor: bgColor, color: color }}
    >
      {children}
    </button>
  );
};

export default Button;
