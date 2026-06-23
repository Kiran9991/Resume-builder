import React, { createContext, useEffect, useState } from "react";

const EducationContext = createContext();

export default EducationContext;

export function EducationProvider({ children }) {
  const LsEducation =
    JSON.parse(localStorage.getItem("educationDetails")) || [];

  const [ educationDetails, setEducationDetails ] = useState(LsEducation);

  useEffect(() => {
    localStorage.setItem("educationDetails", JSON.stringify(educationDetails));
  }, [educationDetails]);

  const addEducationFormHandler = () => {
    setEducationDetails((prev) => {
      const newId = prev.length > 0 ? prev[prev.length - 1].id + 1 : 1;
      return [
        ...prev,
        {
          id: newId,
          name: "",
          degree: "",
          fieldOfStudy: "",
          dateComplete: "",
          gpa: "",
        },
      ];
    });
  };

  const updateEducationFormHandler = (id, obj) => {
    setEducationDetails((prev) =>
      prev.map((item) => (item.id == id ? { ...item, ...obj } : item)),
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
