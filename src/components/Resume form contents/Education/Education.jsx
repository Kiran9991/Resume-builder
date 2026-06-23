import React, { useContext } from "react";
import FormTitle from "../Form/Form Title/FormTitle";
import EmptyItems from "../Empty Items/EmptyItems";
import EducationForm from "./Form/EducationForm";
import EducationContext from "../../../context/educationStore";

export default function Education() {
  const { educationDetails, addEducationForm } = useContext(EducationContext);

  let content = educationDetails.map((item) => (
    <EducationForm key={item.id} item={item} />
  ));

  if (educationDetails.length == 0) {
    content = <EmptyItems text1={"education"} text2={"Add Education"} />;
  }

  return (
    <FormTitle
      title={"Education"}
      description={"Add your education details"}
      text={"Add Education"}
      fun={addEducationForm}
    >
      {content}
    </FormTitle>
  );
}
