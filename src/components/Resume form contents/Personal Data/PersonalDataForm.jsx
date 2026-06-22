import React, { useContext } from "react";

import FormTitle from "../Form/Form Title/FormTitle";
import Inputs from "../Form/Inputs/Inputs";
import PersonalInfoContext, { PersonalInfoProvider } from "../../../context/personalInfoStore";

export default function PersonalDataForm() {
const { personObj, setPersonObj } = useContext(PersonalInfoContext);

// console.log(personObj)
  
  return (
    <>
      <FormTitle
        title={"Personal Information"}
        description={"Get Started with the personal information"}
        />

      <form>
        <Inputs text="Full name" type="text" 
        fun={(s) => setPersonObj({ ...personObj, name: s })}
        val={personObj && personObj.name == 'Your Name' ? '' : personObj.name}
        />
        <Inputs
          text="Email Address"
          type="email"
          fun={(s) => setPersonObj({ ...personObj, email: s })}
          val={personObj.email}
        />
        <Inputs
          text="Phone Number"
          type="text"
          fun={(s) => setPersonObj({ ...personObj, phNumber: s })}
          val={personObj.phNumber}
        />
        <Inputs text="Location" type="text" 
        fun={(s) => setPersonObj({ ...personObj, address: s })}
        val={personObj.address}
        />
        <Inputs text="Profession" type="text"
        fun={(s) => setPersonObj({ ...personObj, profession: s })}
        val={personObj.profession}
        />
        <Inputs
          text="LinkedIn Profile"
          type="text"
          fun={(s) => setPersonObj({ ...personObj, linkedin: s })}
          val={personObj.linkedin}
        />
        <Inputs
          text="Personal Website"
          type="text"
          fun={(s) => setPersonObj({ ...personObj, website: s })}
          val={personObj.website}
        />
      </form>
    </>
  );
}
