import React, { useContext } from "react";
import Inputs from "../Form/Inputs/Inputs";
import FormTitle from "../Form/Form Title/FormTitle";
import styles from "./ProfessionalSummary.module.css";
import ProfessionalSummaryContext from "../../../context/professionalSummaryStore";
import ResumesContext from "../../../context/ResumeStore";

export default function ProfessionalSummary({ resumeData }) {
  const { updateProfessionalSummary } = useContext(ResumesContext);

  return (
    <FormTitle
      title={"Professional Summary"}
      description={"Add summary for your resume here"}
      text={"AI Enhance"}
    >
      <textarea
        rows={6}
        cols={70}
        placeholder="Write a compelling professional summary that highlights your key strengths and career objectives..."
        className={styles.textArea}
        onChange={(e) => updateProfessionalSummary(resumeData.id, e.target.value)}
        value={resumeData.data.professionalSummary}
      />
    </FormTitle>
  );
}
