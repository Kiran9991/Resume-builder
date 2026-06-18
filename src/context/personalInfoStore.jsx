import React, { createContext, useState } from "react";

const PersonalInfoContext = createContext();

export default PersonalInfoContext;

function PersonalInfoProvider({ children }) {
  const [personalInfoObj, setPersonalInfoObj] = useState({ 
    name:'Your Name', email:'', phNumber:'', address:'', profession:'', linkedin:'', website:''
  });

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
