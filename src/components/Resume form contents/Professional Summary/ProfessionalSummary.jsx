import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Inputs from "../Form/Inputs/Inputs";
import FormTitle from "../Form/Form Title/FormTitle";
import styles from "./ProfessionalSummary.module.css";
import ProfessionalSummaryContext from "../../../context/professionalSummaryStore";

export default function ProfessionalSummary() {
  const { professionalSummary, setProfessionalSummary } = useContext(ProfessionalSummaryContext);
  const { id } = useParams();

  const professionalSummaryObj = professionalSummary.find(item => item.resumeId == id) || {};

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
        onChange={(e) => setProfessionalSummary(id, { summary: e.target.value })}
        value={professionalSummaryObj.summary}
      />
    </FormTitle>
  );
}
