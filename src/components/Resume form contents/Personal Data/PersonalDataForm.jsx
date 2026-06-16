import React, { useState } from "react";

import FormTitle from "../Form/Form Title/FormTitle";
import Inputs from "../Form/Inputs/Inputs";

export default function PersonalDataForm() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState(0);
  const [enteredLocation, setEnterdLocation] = useState("");
  const [enteredProfession, setEnteredProfession] = useState('');
  const [enteredLindedInProfile, setEnterdLindedInProfile] = useState("");
  const [enteredPersonalWebsite, setEnterdPersonalWebsite] = useState("");

  const obj = { enteredName, enteredEmail, enteredPhoneNumber, enteredLocation, enteredLindedInProfile, enteredPersonalWebsite };
  
  return (
    <>
      <FormTitle
        title={"Personal Information"}
        description={"Get Started with the personal information"}
      />

      <form>
        <Inputs text="Full name" type="text" 
        fun={(s) => setEnteredName(s)}
        val={enteredName}
        />
        <Inputs
          text="Email Address"
          type="email"
          fun={(s) => setEnteredEmail(s)}
          val={enteredEmail}
        />
        <Inputs
          text="Phone Number"
          type="number"
          fun={(s) => setEnteredPhoneNumber(s)}
          val={enteredPhoneNumber}
        />
        <Inputs text="Location" type="text" 
        fun={(s) => setEnterdLocation(s)}
        val={enteredLocation}
        />
        <Inputs text="Profession" type="text"
        fun={(s) => setEnteredProfession(s)}
        val={enteredProfession}
        />
        <Inputs
          text="LinkedIn Profile"
          type="text"
          fun={(s) => setEnterdLindedInProfile(s)}
          val={enteredLindedInProfile}
        />
        <Inputs
          text="Personal Website"
          type="text"
          fun={(s) => setEnterdPersonalWebsite(s)}
          val={enteredPersonalWebsite}
        />
      </form>
    </>
  );
}
