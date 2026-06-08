import React, { useState } from "react";

import FormTitle from "../Form/Form Title/FormTitle";
import ExperienceForm from "./Form/ExperienceForm";
// import styles from "./ProfessionalExp.module.css";
import EmptyItems from "../Empty Items/EmptyItems";
import { addform, deleteForm } from "../../../utils/addForm";

export default function ProfessionalExp() {
  const [experienceForms, setExperienceForms] = useState([]);

  let content = experienceForms.map((ele, idx) => (
    <ExperienceForm key={idx} id={ele.id} 
    deleteId={() => deleteForm(experienceForms, setExperienceForms, ele.id)}/>
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
        fun={() => addform(experienceForms, setExperienceForms)}
      >
        {content}
      </FormTitle>
    </>
  );
}
