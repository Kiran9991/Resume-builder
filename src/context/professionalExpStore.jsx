import React, { createContext, useEffect, useState } from "react";

const ProfessionalExpContext = createContext();

export default ProfessionalExpContext;

export function ProfessionalExpProvider({ children }) {
  const [expdata, setExpdata] = useState([]);

  const addFormHandler = (id) => {
    setExpdata(
      
    };

  const updateExpDetailsFormHandler = (id, val) => {

  };

  const deleteExpDetailsFormHandler = (id) => {
  };

  const expDetailsObj = {
  };

  return (
    <ProfessionalExpContext.Provider value={expDetailsObj}>
      {children}
    </ProfessionalExpContext.Provider>
  );
}
