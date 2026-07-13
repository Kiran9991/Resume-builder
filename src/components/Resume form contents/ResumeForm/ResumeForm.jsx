import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ResumeForm.module.css";
import Bar from "../../Bar/Bar";
import FormTitleButton from "../Form/Form Title buttons/FormTitleButton";
import { back } from "../../../../public/index.jsx";
import { PersonalDataForm, ProfessionalSummary, ProfessionalExp, Education, Project, Skills } from "../index.jsx";
import ResumesContext from "../../../context/ResumeStore";

export default function ResumeForm() {
  const { id } = useParams();
  const { resumes, count, increamentCount, decrementCount } = useContext(ResumesContext);
  const resumeData = resumes.filter((item) => item.id == id);

  const ResumeContentArr = [
    <PersonalDataForm resumeData={resumeData[0]} />,
    <ProfessionalSummary resumeData={resumeData[0]} />,
    <ProfessionalExp resumeData={resumeData[0]} />,
    <Education resumeData={resumeData[0]} />,
    <Project resumeData={resumeData[0]} />,
    <Skills resumeData={resumeData[0]} />,
  ];

  let content = ResumeContentArr.find((_, idx) => count == idx);

  const percentage = Math.floor((count / 5) * 100);

  return (
    <div className={styles.resumeFormContainer}>
      <div className={styles.backBtn} onClick={() => window.history.back()}>
        <img src={back} height={15} />
        <div>Back to Dashboard</div>
      </div>
      <div className={styles.formSection}>
        <Bar percentage={percentage} />
        <FormTitleButton prev={decrementCount} next={increamentCount} />
        {content}
        <div className={styles.saveBth}>
          <button className={styles.downloadbtn}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
