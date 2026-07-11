import React, { createContext, useEffect, useState } from "react";

const ProfessionalExpContext = createContext();

export default ProfessionalExpContext;

export function ProfessionalExpProvider({ children }) {
  const [expData, setExpdata] = useState([]);

  const addFormHandler = (id) => {
        setExpdata(prev => {
          const exist = prev.some(obj => obj.resumeId == id);

          if(exist) {
            const existObj = prev.find(obj => obj.resumeId == id);
            const newId = existObj.arrOfObj.length > 0 ? existObj.arrOfObj[existObj.arrOfObj.length - 1].formId + 1 : 1;
            return prev.map(obj => obj.resumeId == id ? { ...obj, arrOfObj: [...obj.arrOfObj, { formId: newId }] } : obj);
          }

          return [...prev, { resumeId: id, arrOfObj: [{ formId: 1 } ] }];
        })
  };

  const updateExpDetailsFormHandler = (resumeId, formId, obj) => {
    setExpdata(prev => prev.map(item => item.resumeId == resumeId ? { ...item,
        arrOfObj: item.arrOfObj.map(objItem => objItem.formId == formId ? { ...objItem, ...obj} : objItem)
    } : item));
  };

  const deleteExpDetailsFormHandler = (resumeId, formId) => {
    setExpdata(prev => prev.map(item => item.resumeId == resumeId ? { ...item, 
      arrOfObj: item.arrOfObj.filter(objItem => objItem.formId != formId) } : item));
  };

  const expDetailsObj = {
    expData, 
    addExpForm: addFormHandler,
    updateExpform: updateExpDetailsFormHandler,
    deleteExpForm: deleteExpDetailsFormHandler
  };

  return (
    <ProfessionalExpContext.Provider value={expDetailsObj}>
      {children}
    </ProfessionalExpContext.Provider>
  );
}
