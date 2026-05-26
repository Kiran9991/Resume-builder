import React from "react";

import styles from "./FormTitle.module.css";

export default function FormTitle({ title, description, text }) {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.formTitle}>
        <h3>{title}</h3>
        <p className={styles.brief}>{description}</p>
      </div>
      <button>{text}</button>
    </div>
  );
}
