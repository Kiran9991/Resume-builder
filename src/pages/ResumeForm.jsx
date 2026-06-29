import React, { useState } from "react";
import styles from "./ResumeForm.module.css";

import ResumePreview from "../components/Resume Preview/ResumePreview";
import PersonalDataForm from "../components/Resume form contents/Personal Data/PersonalDataForm";
import FormTitleButton from "../components/Resume form contents/Form/Form Title buttons/FormTitleButton";
import ProfessionalSummary from "../components/Resume form contents/Professional Summary/ProfessionalSummary";
import ProfessionalExp from "../components/Resume form contents/Professional Experience/ProfessionalExp";
import Education from "../components/Resume form contents/Education/Education";
import Project from "../components/Resume form contents/Projects/Project";
import Skills from "../components/Resume form contents/Skills/Skills";

export default function ResumeForm() {
  const ResumeContentArr = [
    <PersonalDataForm />,
    <ProfessionalSummary />,
    <ProfessionalExp />,
    <Education />,
    <Project />,
    <Skills />,
  ];

  const limitOfResumeContent = ResumeContentArr.length - 1;

  const [count, setCount] = useState(0);

  let content = ResumeContentArr.find((_, idx) => count == idx);

  const percentage = Math.floor((count / limitOfResumeContent) * 100);

  const increamentCount = () => {
    count < limitOfResumeContent && setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    count > 0 && setCount((prev) => prev - 1);
  };

  const downloadResume = () => {
    window.print();
  }

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.btnSection}>
        <button className={styles.share}>
          Share
        </button>
        <button className={styles.public}>Public</button>
        <button className={styles.downloadbtn} onClick={downloadResume}>Download</button>
      </div>

      <div className={styles.resumeFormContainer}>
        <div className={styles.formSection}>

          <div className={styles.progressBar}>
            </div>
            <div className={styles.bar} 
            style={{ width: `${percentage}%` }} />

          <FormTitleButton prev={decrementCount} next={increamentCount} />
          {content}
          <div className={styles.saveBth}>
            <button className={styles.downloadbtn}>Save Changes</button>
          </div>
        </div>

        <ResumePreview />
      </div>
    </div>
  );
}
