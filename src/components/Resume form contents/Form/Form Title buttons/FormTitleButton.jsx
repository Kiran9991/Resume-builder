import React from "react";

import styles from "./FormTitleButton.module.css";
import styles1 from '../../ResumeForm/ResumeForm.module.css';

export default function FormTitleButton({ prev, next }) {
  return (
    <div className={styles.formTitleBtn}>
      <button className={styles1.share}>Template</button>
      <button className={styles1.public}>Accent</button>
      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next {`>`}</button>
    </div>
  );
}
