import React, { useContext } from "react";
import FormTitle from "../Form/Form Title/FormTitle";
import EmptyItems from "../Empty Items/EmptyItems";
import EducationForm from "./Form/EducationForm";
import EducationContext from "../../../context/educationStore";
import { useParams } from "react-router-dom";

export default function Education() {
  const { educationDetails, addEducationForm } = useContext(EducationContext);
  const { id } = useParams();

  const educationDetailsObj = educationDetails.find(item => item.resumeId == id) || { arrOfData: [] };
  
  let content = educationDetailsObj.arrOfData.map((item) => (
    <EducationForm key={item.formId} item={item} />
  ));
  
  if (educationDetailsObj.arrOfData.length == 0) {
    content = <EmptyItems text1={"education"} text2={"Add Education"} />;
  }

  return (
    <FormTitle
      title={"Education"}
      description={"Add your education details"}
      text={"Add Education"}
      fun={() => addEducationForm(id)}
    >
      {content}
    </FormTitle>
  );
}
