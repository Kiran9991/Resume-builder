import React, { createContext, useEffect, useState } from "react";

const ProfessionalExpContext = createContext();

export default ProfessionalExpContext;

export function ProfessionalExpProvider({ children }) {
  const expDetailsArrObj = JSON.parse(localStorage.getItem("expDetails")) || [];

  const [expDetails, setExpDetails] = useState(expDetailsArrObj);

  useEffect(() => {
    localStorage.setItem("expDetails", JSON.stringify(expDetails));
  }, [expDetails]);

  const addFormHandler = () => {
    setExpDetails((prev) => {
      const newId = prev.length > 0 ? prev[prev.length - 1].id + 1 : 1;
      return [
        ...prev,
        {
          id: newId,
          companyName: "",
          jobTitle: "",
          joiningDate: "",
          endDate: "",
          currentlyWorking: false,
          jobDescription: "",
        },
      ];
    });
  };

  const updateExpDetailsFormHandler = (id, val) => {
    setExpDetails((prev) =>
      prev.map((item) => (item.id == id ? { ...item, ...val } : item)),
    );
  };

  const deleteExpDetailsFormHandler = (id) => {
    setExpDetails((prev) => [...prev.filter((item) => item.id !== id)]);
  };

  const expDetailsObj = {
    expDetails: expDetails,
    addForm: addFormHandler,
    updateForm: updateExpDetailsFormHandler,
    deleteForm: deleteExpDetailsFormHandler,
  };

  return (
    <ProfessionalExpContext.Provider value={expDetailsObj}>
      {children}
    </ProfessionalExpContext.Provider>
  );
}
