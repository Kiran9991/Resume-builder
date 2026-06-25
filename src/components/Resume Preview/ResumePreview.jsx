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

export default function ResumePreview() {
  const { professionalSummary } = useContext(ProfessionalSummaryContext);
  const { skills } = useContext(SkillsContext);

  return (
    <div className={styles.previewSection} id="resumeDownload">
      <ResumeHeader />

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
