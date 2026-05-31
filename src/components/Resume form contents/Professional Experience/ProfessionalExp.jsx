import React, { useState } from "react";

import FormTitle from "../Form Title/FormTitle";
import ExperienceForm from "./Experience Form/ExperienceForm";
import styles from "./ProfessionalExp.module.css";

export default function ProfessionalExp() {
  const [experienceForms, setExperienceForms] = useState([]);

  const addExperienceFormHandler = () => {
    setExperienceForms(prev => {
      const newId = experienceForms.length > 0 ? experienceForms[experienceForms.length-1].id + 1 : 1;
      return [...prev, { id: newId }]
    })
  };

  const deleteExperienceFormHandler = (id) => {
    console.log(id)
    setExperienceForms([...experienceForms.filter((ele) => ele.id != id)]);
  }

  console.log(typeof experienceForms[0], experienceForms)

  let content = experienceForms.map((ele, idx) => (
    <ExperienceForm key={idx} id={idx+1} 
    deleteId={deleteExperienceFormHandler}/>
  ));

  if (experienceForms.length == 0) {
    content = (
      <div className={styles.noFormContent}>
        <p>No work experience added yet.</p>
        <p>Click "Add Experience" to get started.</p>
      </div>
    );
  }

  return (
    <>
      <FormTitle
        title={"Professional Experience"}
        description={"Add your job experience"}
        text={"add Experience"}
        fun={addExperienceFormHandler}
      />
      <div className={styles.experienceFormContainer}>
        {content}
      </div>
    </>
  );
}
