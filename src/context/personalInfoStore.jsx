import React, { createContext, useEffect, useState } from "react";

const PersonalInfoContext = createContext();

export default PersonalInfoContext;

function PersonalInfoProvider({ children }) {
  const [personalInfo, setPersonalInfo] = useState([]);

  const setPersonalInfoHandler = (id, obj) => {
    setPersonalInfo(prev => {
      const exist = prev.some(item => item.resumeId === id);

      if(exist) {
        return prev.map(item => item.resumeId == id ? { ...item, ...obj } : item);
      }

      return [...prev, { resumeId: id, ...obj }];
    });
  };

  const obj = {
    personalInfo,
    setPersonalInfo: setPersonalInfoHandler,
  };

  return (
    <PersonalInfoContext.Provider value={obj}>
      {children}
    </PersonalInfoContext.Provider>
  );
}

export { PersonalInfoProvider };
