import React from "react";
import Inputs from "../Form/Inputs/Inputs";
import FormTitle from "../Form/Form Title/FormTitle";
import styles from './ProfessionalSummary.module.css';

export default function ProfessionalSummary() {
  return (
    <>
      <FormTitle
        title={"Professional Summary"}
        description={"Add summary for your resume here"}
        text={'AI Enhance'}
      />
      <textarea rows={6} cols={70}
      placeholder="Write a compelling professional summary that highlights your key strengths and career objectives..."
      className={styles.textArea}/>
    </>
  );
}
