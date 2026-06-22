import React, { useContext } from "react";

import FormTitle from "../Form/Form Title/FormTitle";
import ExperienceForm from "./Form/ExperienceForm";
import EmptyItems from "../Empty Items/EmptyItems";
import ProfessionalExpContext from "../../../context/professionalExpStore";

export default function ProfessionalExp() {
  const { forms, addForm, deleteExpDetails, expDetails, setExpDetail } = useContext(ProfessionalExpContext);

  console.log(expDetails)

  let content = expDetails.map((ele, idx) => (
    <ExperienceForm key={idx} id={ele.id} deleteId={() => deleteExpDetails(ele.id)} />
  ));

  if (forms.length == 0) {
    content = <EmptyItems text1={"work experience"} text2={"Add Experience"} />;
  }

  return (
    <>
      <FormTitle
        title={"Professional Experience"}
        description={"Add your job experience"}
        text={"add Experience"}
        fun={setExpDetail}
      >
        {content}
      </FormTitle>
    </>
  );
}
