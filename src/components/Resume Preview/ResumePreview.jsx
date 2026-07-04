import React, { useContext } from "react";

import styles from "./ResumePreview.module.css";
import PersonalInfoContext from "../../context/personalInfoStore";
import ProfessionalSummaryContext from "../../context/professionalSummaryStore";
import ProfessionalExpContext from "../../context/professionalExpStore";
import EducationContext from "../../context/educationStore";
import ProjectContext from "../../context/projectStore";
import SkillsContext from "../../context/skillStore";
import ResumeHeader from "./ResumeHeader/ResumeHeader";
import ProfessionalExpPreview from "./ProfessionalExp Preview/ProfessionalExpPreview";
import ProjectPreview from "./Projects preview/ProjectPreview";
import Education from "../Resume form contents/Education/Education";
import EducationPreview from "./Education Preview/EducationPreview";
import ResumesContext from "../../context/ResumeStore";
import { useParams } from "react-router-dom";

export default function ResumePreview() {
  const { resumes } = useContext(ResumesContext);
  const { id } = useParams();
  const { professionalSummary } = useContext(ProfessionalSummaryContext);
  const { skills } = useContext(SkillsContext);

  const obj = resumes.filter((item) => item.id == id);

  // console.log(resumes, obj)

  return (
    <div className={styles.previewSection} id="resume-preview">
      <ResumeHeader obj={obj[0].data.personalInfo}/>

      {professionalSummary && (
        <section className={styles.s1}>
          <h2>Profession Summary</h2>
          <p>{professionalSummary}</p>
        </section>
      )}

      {/* Professional Experience */}
      <ProfessionalExpPreview />

      {/* Projects */}
      <ProjectPreview />

      {/* Education */}
      <EducationPreview />

      {/* Skills */}
      {skills.length > 0 && (
        <div className={styles.s1}>
          <h2>Skills</h2>
          <ul className={styles.itemsContainer}>
            {skills.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
