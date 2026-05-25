import React from "react";

import styles from "./FormTitle.module.css";

export default function FormTitle({title, description}) {
  return (
    <div className={styles.formTitle}>
      <h3>{title}</h3>
      <p className={styles.brief}>{description}</p>
    </div>
  );
}
