import React, { createContext, useEffect, useState } from "react";

const EducationContext = createContext();

export default EducationContext;

export function EducationProvider({ children }) {
  const [ educationDetails, setEducationDetails ] = useState([]);

  const addEducationFormHandler = (id) => {
    setEducationDetails(prev => {
      const exist = prev.find(item => item.resumeId == id);

      if(exist) {
        const newId = exist.arrOfData[exist.arrOfData.length - 1].formId + 1;
        return prev.map(item => item.resumeId == id ? { ...item, arrOfData: [...item.arrOfData, { formId: newId }, ], } : item);
      }

      return [...prev, { resumeId: id, arrOfData: [ { formId: 1 }, ], }, ];
    });
  };

  const updateEducationFormHandler = (resumeId, formId, obj) => {
    setEducationDetails((prev) =>
      prev.map((item) => (item.resumeId == resumeId ? { ...item, arrOfData: } : item)),
    );
  };

  const deleteEducationFormHandler = (id) => {
    setEducationDetails((prev) => [...prev.filter((item) => item.id != id)]);
  };

  const educationObj = {
    educationDetails,
    addEducationForm: addEducationFormHandler,
    updateEducationForm: updateEducationFormHandler,
    deleteEducationForm: deleteEducationFormHandler,
  };

  return (
    <EducationContext.Provider value={educationObj}>
      {children}
    </EducationContext.Provider>
  );
}
