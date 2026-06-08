import React from "react";

import styles from "./FormTitleButton.module.css";
import styles1 from '../../../../pages/ResumeForm.module.css';

export default function FormTitleButton() {
  return (
    <div className={styles.formTitleBtn}>
      <button className={styles1.share}>Template</button>
      <button className={styles1.public}>Accent</button>
      <button>Previous</button>
      <button>Next {`>`}</button>
    </div>
  );
}
