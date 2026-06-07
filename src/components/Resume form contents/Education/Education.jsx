import React, { useState } from "react";
import FormTitle from "../Form Title/FormTitle";
import EmptyItems from "../Empty Items/EmptyItems";
import EducationForm from "./Form/EducationForm";
import { addform, deleteForm } from "../../../utils/addForm";
import styles from './Education.module.css';

export default function Education() {
  const [educationForms, setEducationForms] = useState([]);

  let content = educationForms.map((ele, idx) => (
    <EducationForm key={idx} id={ele.id} 
    deleteId={() => deleteForm(educationForms, setEducationForms, ele.id)}/>
  ));

  if (educationForms.length == 0) {
    content = (<EmptyItems text1={'education'}
    text2={'Add Education'}
    />)
  }

  return (
    <>
      <FormTitle
        title={"Education"}
        description={"Add your education details"}
        text={"Add Education"}
        fun={() => addform(educationForms, setEducationForms)}
      />
      <div className={styles.educationFormContainer}>
        {content}
      </div>
    </>
  );
}
