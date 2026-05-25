import React from "react";

import FormTitle from "../Form Title/FormTitle";
import Inputs from "../Inputs/Inputs";

export default function PersonalDataForm() {
  return (
    <>
      <FormTitle
        title={"Personal Information"}
        description={"Get Started with the personal information"}
      />

      <form>
        <Inputs text="Full name" type="text" />
        <Inputs text="Email Address" type="email" />
        <Inputs text="Phone Number" type="number" />
        <Inputs text="Location" type="text" />
        <Inputs text="Profession" type="text" />
        <Inputs text="LinkedIn Profile" type="text" />
        <Inputs text="Personal Website" type="text" />
      </form>
    </>
  );
}
