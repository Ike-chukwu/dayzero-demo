import React from "react";
import styles from '../../../styles/button.module.css'

const Button = ({ children, color, bgColor }) => {
  return <button className={styles.btn} style={{ backgroundColor: bgColor, color:color }}>{children}</button>;
};

export default Button;
