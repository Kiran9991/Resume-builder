import React from "react";

import styles from "./inputs.module.css";

export default function Inputs({ text, type, fun, val }) {
  return (
    <div className={styles.inputGroup}>
      <label>{text}</label>
      <input type={type} placeholder={`Enter your ${text}`}
      onChange={(e) => fun(e.target.value)}
      value={val}
      />
    </div>
  );
}
