import React from "react";
import styles from "./ResumeForm.module.css";
import { PrintPdf } from "../components/Resume Preview/ResumePreview";

import ResumePreview from "../components/Resume Preview/ResumePreview";
import PersonalDataForm from "../components/Resume form contents/Personal Data/PersonalDataForm";
import FormTitleButton from "../components/Resume form contents/Form Title buttons/FormTitleButton";
import ProffessionalSummary from "../components/Resume form contents/Professional Summary/ProffessionalSummary";

export default function ResumeForm() {
  return (
    <div className={styles.resumeContainer}>
      <div className={styles.btnSection}>
        <button className={styles.share} onClick={PrintPdf}>
          Share
        </button>
        <button className={styles.public}>Public</button>
        <button className={styles.downloadbtn}>Download</button>
      </div>

      <div className={styles.resumeFormContainer}>
        <div className={styles.formSection}>
          <FormTitleButton/>
          {/* <PersonalDataForm /> */}
          <ProffessionalSummary/>

          <div className={styles.saveBth}>
            <button className={styles.downloadbtn}>Save Changes</button>
          </div>
        </div>

        <ResumePreview />
      </div>
    </div>
  );
}
