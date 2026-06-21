import React, { createContext, useEffect, useState } from "react";

const PersonalInfoContext = createContext();

export default PersonalInfoContext;

function PersonalInfoProvider({ children }) {
  const LsObj = {
    name: "Your Name",
    ...JSON.parse(localStorage.getItem("userObj")),
  };

  const [personalInfoObj, setPersonalInfoObj] = useState(LsObj);

  useEffect(() => {
    localStorage.setItem("userObj", JSON.stringify(personalInfoObj));
  }, [personalInfoObj]);

  const setPersonalInfoObjHandler = (obj) => {
    setPersonalInfoObj(obj);
  };

  const obj = {
    personObj: personalInfoObj,
    setPersonObj: setPersonalInfoObjHandler,
  };

  return (
    <PersonalInfoContext.Provider value={obj}>
      {children}
    </PersonalInfoContext.Provider>
  );
}

export { PersonalInfoProvider };
