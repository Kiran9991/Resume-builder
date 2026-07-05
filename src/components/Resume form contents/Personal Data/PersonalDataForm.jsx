import React, { useContext } from "react";

import FormTitle from "../Form/Form Title/FormTitle";
import Inputs from "../Form/Inputs/Inputs";
import PersonalInfoContext, { PersonalInfoProvider } from "../../../context/personalInfoStore";
import { useParams } from "react-router-dom";
import ResumesContext from "../../../context/ResumeStore";

export default function PersonalDataForm() {
// const { personObj, updateResumeData } = useContext(PersonalInfoContext);
const { resumes, updateResumeData } = useContext(ResumesContext);
const { id } = useParams();

const personObj = resumes.filter((item) => item.id == id);
  
  return (
    <>
      <FormTitle
        title={"Personal Information"}
        description={"Get Started with the personal information"}
        />

      <form>
        <Inputs text="Full name" type="text" 
        fun={(s) => updateResumeData(id, { ...personObj[0], name: s })}
        val={personObj[0].data.personalInfo.name}
        />
        <Inputs
          text="Email Address"
          type="email"
          fun={(s) => updateResumeData(id, { ...personObj[0], email: s })}
          val={personObj[0].data.personalInfo.email}
        />
        <Inputs
          text="Phone Number"
          type="text"
          fun={(s) => updateResumeData(id, { ...personObj[0], phNumber: s })}
          val={personObj[0].data.personalInfo.phNumber}
        />
        <Inputs text="Location" type="text" 
        fun={(s) => updateResumeData(id, { ...personObj[0], address: s })}
        val={personObj[0].data.personalInfo.address}
        />
        <Inputs text="Profession" type="text"
        fun={(s) => updateResumeData(id, { ...personObj[0], profession: s })}
        val={personObj[0].data.personalInfo.profession}
        />
        <Inputs
          text="LinkedIn Profile"
          type="text"
          fun={(s) => updateResumeData(id, { ...personObj[0], linkedin: s })}
          val={personObj[0].data.personalInfo.linkedin}
        />
        <Inputs
          text="Personal Website"
          type="text"
          fun={(s) => updateResumeData(id, { ...personObj[0], website: s })}
          val={personObj[0].data.personalInfo.website}
        />
      </form>
    </>
  );
}
