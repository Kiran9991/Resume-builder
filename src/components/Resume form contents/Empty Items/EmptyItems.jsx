import React from "react";

import styles from "./EmptyItems.module.css";

export default function EmptyItems({ text1, text2 }) {
  return (
    <div className={styles.noFormContent}>
      <p>No {text1} added yet.</p>
      <p>Click "{text2}" to get started.</p>
    </div>
  );
}
