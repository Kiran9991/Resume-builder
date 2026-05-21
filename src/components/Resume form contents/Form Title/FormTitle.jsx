import React from "react";

import styles from "./FormTitle.module.css";

export default function FormTitle() {
  return (
    <div className={styles.formTitle}>
      <h3>Personal Information</h3>
      <p className={styles.brief}>Get Started with the personal information</p>
    </div>
  );
}
