import React, { useState } from "react";

import FormTitle from "../Form Title/FormTitle";
import ExperienceForm from "./Experience Form/ExperienceForm";
import styles from "./ProfessionalExp.module.css";
import EmptyItems from "../Empty Items/EmptyItems";
import { addform, deleteForm } from "../../../utils/addForm";

export default function ProfessionalExp() {
  const [experienceForms, setExperienceForms] = useState([]);

  // addform
  // const addExperienceFormHandler = () => {
  //   setExperienceForms(prev => {
  //     const newId = experienceForms.length > 0 ? experienceForms[experienceForms.length-1].id + 1 : 1;
  //     return [...prev, { id: newId }]
  //   })
  // };

  // const deleteExperienceFormHandler = (id) => {
  //   setExperienceForms([...experienceForms.filter((ele) => ele.id != id)]);
  // }

  let content = experienceForms.map((ele, idx) => (
    <ExperienceForm key={idx} id={ele.id} 
    deleteId={deleteForm(experienceForms, setExperienceForms)}/>
  ));

  if (experienceForms.length == 0) {
    content = (<EmptyItems text1={'work experience'}
    text2={'Add Experience'}
    />)
  }

  return (
    <>
      <FormTitle
        title={"Professional Experience"}
        description={"Add your job experience"}
        text={"add Experience"}
        fun={addform(experienceForms, setExperienceForms)}
      />
      <div className={styles.experienceFormContainer}>
        {content}
      </div>
    </>
  );
}
