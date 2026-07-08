import React, { useContext } from "react";

import FormTitle from "../Form/Form Title/FormTitle";
import Inputs from "../Form/Inputs/Inputs";
import PersonalInfoContext from "../../../context/personalInfoStore";
import { useParams } from "react-router-dom";

export default function PersonalDataForm() {
const { personalInfo, setPersonalInfo } = useContext(PersonalInfoContext);
const { id } = useParams();

const personalInfoObj = personalInfo.find(item => item.resumeId == id) || {};
  
  return (
    <>
      <FormTitle
        title={"Personal Information"}
        description={"Get Started with the personal information"}
        />

      <form>
        <Inputs text="Full name" type="text" 
        fun={(s) => setPersonalInfo(id, { name: s })}
        val={personalInfo.name}
        />
        <Inputs
          text="Email Address"
          type="email"
          fun={(s) => setPersonalInfo(id, { email: s })}
          val={personalInfo.email}
        />
        <Inputs
          text="Phone Number"
          type="text"
          fun={(s) => setPersonalInfo(id, { phNumber: s })}
          val={personalInfo.phNumber}
        />
        <Inputs text="Location" type="text" 
        fun={(s) => setPersonalInfo(id, { address: s })}
        val={personalInfo.address}
        />
        <Inputs text="Profession" type="text"
        fun={(s) => setPersonalInfo(id, { profession: s })}
        val={personalInfo.profession}
        />
        <Inputs
          text="LinkedIn Profile"
          type="text"
          fun={(s) => setPersonalInfo(id, { linkedin: s })}
          val={personalInfo.linkedin}
        />
        <Inputs
          text="Personal Website"
          type="text"
          fun={(s) => setPersonalInfo(id, { website: s })}
          val={personalInfo.website}
        />
      </form>
    </>
  );
}
