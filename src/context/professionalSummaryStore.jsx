import React, { createContext, useEffect, useState } from 'react'

const ProfessionalSummaryContext = createContext();

export default ProfessionalSummaryContext;

export function ProfessionalSummaryProvider({ children }) {
    const obj = JSON.parse(localStorage.getItem('professionalSummary')) || '';
    const [professionalSummary, setProfessionalSummary] = useState(obj);

    useEffect(() => {
        localStorage.setItem('professionalSummary',JSON.stringify(professionalSummary));
    }, [professionalSummary]);

  return (
    <ProfessionalSummaryContext.Provider value={{
        professionalSummary, setProfessionalSummary
    }}>
        {children}
    </ProfessionalSummaryContext.Provider>
  )
}
