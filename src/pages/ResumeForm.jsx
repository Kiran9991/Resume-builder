import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ResumeForm.module.css";
import { ResumePreview, PersonalDataForm, FormTitleButton, ProfessionalSummary, ProfessionalExp, Education, 
  Project, Skills, ResumesContext, Bar } from "../components";  

export default function ResumeForm() {
  const { id } = useParams();
  const { resumes } = useContext(ResumesContext);

  const resumeData = resumes.filter(item => item.id == id);

  const ResumeContentArr = [
    <PersonalDataForm resumeData={resumeData[0]} />,
    <ProfessionalSummary resumeData={resumeData[0]} />,
    <ProfessionalExp resumeData={resumeData[0]} />,
    <Education resumeData={resumeData[0]} />,
    <Project resumeData={resumeData[0]} />,
    <Skills resumeData={resumeData[0]} />,
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
    <div className={styles.resumeContainerWrapper}>
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
          <Bar percentage={percentage} />
          <FormTitleButton prev={decrementCount} next={increamentCount} />
          {content}
          <div className={styles.saveBth}>
            <button className={styles.downloadbtn}>Save Changes</button>
          </div>
        </div>

        <ResumePreview />
      </div>
    </div>
    </div>
  );
}
