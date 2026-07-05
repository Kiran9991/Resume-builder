import React, { useContext } from "react";

import FormTitle from "../Form/Form Title/FormTitle";
import ExperienceForm from "./Form/ExperienceForm";
import EmptyItems from "../Empty Items/EmptyItems";
import ProfessionalExpContext from "../../../context/professionalExpStore";

export default function ProfessionalExp({ resumeData }) {
  const { expDetails, addForm } = useContext(ProfessionalExpContext);

  let content = expDetails.map((item) => (
    <ExperienceForm key={item.id} item={item}/>
  ));

  if (expDetails.length == 0) {
    content = <EmptyItems text1={"work experience"} text2={"Add Experience"} />;
  }

  return (
    <>
      <FormTitle
        title={"Professional Experience"}
        description={"Add your job experience"}
        text={"add Experience"}
        fun={addForm}
      >
        {content}
      </FormTitle>
    </>
  );
}
