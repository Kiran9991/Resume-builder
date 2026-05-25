import React from "react";

import styles from "./inputs.module.css";

export default function Inputs({ text, type }) {
  return (
    <div className={styles.inputGroup}>
      <label>{text}</label>
      <input type={type} placeholder={`Enter your ${text}`} />
    </div>
  );
}
