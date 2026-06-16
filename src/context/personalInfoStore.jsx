import React, { createContext, useState } from "react";

const PersonalInfoContext = createContext();

export default PersonalInfoContext;

function PersonalInfoProvider({ children }) {
  const [personalInfoObj, setPersonalInfoObj] = useState({});

  const setPersonalInfoObjHandler = (obj) => {
    setPersonalInfoObj(obj);
  };

  const obj = {
    personalInfo: personalInfoObj,
    setPersonalInfo: setPersonalInfoObjHandler,
  };

  return (
    <PersonalInfoContext.Provider value={obj}>
      {children}
    </PersonalInfoContext.Provider>
  );
}

export { PersonalInfoProvider };
