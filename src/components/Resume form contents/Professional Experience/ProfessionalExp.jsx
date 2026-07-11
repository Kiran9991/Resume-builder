import React, { useContext } from "react";

import FormTitle from "../Form/Form Title/FormTitle";
import ExperienceForm from "./Form/ExperienceForm";
import EmptyItems from "../Empty Items/EmptyItems";
import ProfessionalExpContext from "../../../context/professionalExpStore";

export default function ProfessionalExp({ resumeData }) {
  const { expData, addExpForm } = useContext(ProfessionalExpContext);

  const expDataObj = expData.find(item => item.resumeId == resumeData.id) || { arrOfObj: [] };

  let content = expDataObj.arrOfObj.map((item) => (
    <ExperienceForm key={item.formId} item={item}/>
  ));

  if (expData.length == 0) {
    content = <EmptyItems text1={"work experience"} text2={"Add Experience"} />;
  }

  return (
    <>
      <FormTitle
        title={"Professional Experience"}
        description={"Add your job experience"}
        text={"add Experience"}
        fun={() => addExpForm(resumeData.id)}
      >
        {content}
      </FormTitle>
    </>
  );
}
