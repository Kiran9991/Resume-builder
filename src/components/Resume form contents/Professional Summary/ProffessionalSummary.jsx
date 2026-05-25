import React from "react";
import Inputs from "../Inputs/Inputs";
import FormTitle from "../Form Title/FormTitle";
import styles from './ProffessionalSummary.module.css';

export default function ProffessionalSummary() {
  return (
    <>
      <FormTitle
        title={"Professional Summary"}
        description={"Add summary for your resume here"}
      />
      <textarea rows={6} cols={70}
      placeholder="Write a compelling professional summary that highlights your key strengths and career objectives..."
      className={styles.textArea}/>
    </>
  );
}
