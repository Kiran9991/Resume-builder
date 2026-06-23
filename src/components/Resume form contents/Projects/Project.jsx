import React, { useContext } from "react";
import EmptyItems from "../Empty Items/EmptyItems";
import FormTitle from "../Form/Form Title/FormTitle";
import ProjectForm from "./Form/ProjectForm";
import ProjectContext from "../../../context/projectStore";

export default function Project() {
  const { projectDetails, addProjectForm,  } = useContext(ProjectContext);

  let content = projectDetails.map((item) => (
    <ProjectForm
      key={item.id}
      item={item}
    />
  ));

  if (projectDetails.length == 0) {
    content = <EmptyItems text1={"project"} text2={"Add Projects"} />;
  }
  
  return (
    <FormTitle
      title={"Projects"}
      description={"Add your project details"}
      text={"Add Projects"}
      fun={addProjectForm}
    >
      {content}
    </FormTitle>
  );
}
