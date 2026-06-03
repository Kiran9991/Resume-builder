import React from "react";
import FormTitle from "../Form Title/FormTitle";
import EmptyItems from "../Empty Items/EmptyItems";
import EducationForm from "./Form/EducationForm";

export default function Education() {
  let content = (
    <div>
      <EmptyItems text1={"education"} text2={"Add Education"} />
    </div>
  );

  return (
    <>
      <FormTitle
        title={"Education"}
        description={"Add your education details"}
        text={"Add Education"}
      />
      <EducationForm />
    </>
  );
}
