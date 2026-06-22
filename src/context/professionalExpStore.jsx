import React, { createContext, useEffect, useState } from 'react';

const ProfessionalExpContext = createContext();

export default ProfessionalExpContext;

export function ProfessionalExpProvider({ children }) {
    const expDetailsArrObj = JSON.parse(localStorage.getItem('expDetails')) || [];

    const LsForms = JSON.parse(localStorage.getItem('forms')) || [];

    const [expDetails, setExpDetails] = useState(expDetailsArrObj);

    const [forms, setForms] = useState(LsForms);

    useEffect(() => {
        localStorage.setItem('forms', JSON.stringify(forms));
        localStorage.setItem('expDetails', JSON.stringify(expDetails));
    }, [forms, expDetails]);

    const setFormHandler = () => {
        setForms((prev) => {
            const newId = prev.length > 0 ? prev[prev.length-1].id + 1 : 1;
            return [...prev, { id: newId }];
        })
    }

    const deleteFormHandler = (id) => {
        setExpDetails((prev) => [...prev.filter((ele) => ele.id != id)]);
    }

    const setExpDetailsHandler = () => {
        setExpDetails((prev) => {
            const newId = prev.length > 0 ? prev[prev.length-1].id + 1 : 1;
            return [...prev, { id: newId }]
        });
    }

    const deleteExpDetailsHandler = (id) => {
        setExpDetails((prev) => [...prev.filter((ele) => ele.id !== id)]);
    }

    const expDetailsObj = {
        expDetails,
        setExpDetail: setExpDetailsHandler,
        deleteExpDetails: deleteFormHandler,
        forms,
        addForm: setFormHandler,
        deleteForm: deleteFormHandler,
        setExpDetails
    }

  return (
    <ProfessionalExpContext.Provider value={expDetailsObj}>
      {children}
    </ProfessionalExpContext.Provider>
  )
}
