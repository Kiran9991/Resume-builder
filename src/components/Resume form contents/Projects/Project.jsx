import React, { useState } from "react";
import { addform, deleteForm } from "../../../utils/addForm";
import EmptyItems from "../Empty Items/EmptyItems";
import FormTitle from "../Form/Form Title/FormTitle";
import ProjectForm from "./Form/ProjectForm";

export default function Project() {
  const [projectForms, setProjectForms] = useState([]);

  let content = projectForms.map((ele, idx) => (
    <ProjectForm
      key={idx}
      id={ele.id}
      deleteId={() => deleteForm(projectForms, setProjectForms, ele.id)}
    />
  ));

  if (projectForms.length == 0) {
    content = <EmptyItems text1={"project"} text2={"Add Projects"} />;
  }
  
  return (
    <FormTitle
      title={"Projects"}
      description={"Add your project details"}
      text={"Add Projects"}
      fun={() => addform(projectForms, setProjectForms)}
    >
      {content}
    </FormTitle>
  );
}
