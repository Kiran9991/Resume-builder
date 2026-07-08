import React, { createContext, useState } from 'react';

const ProfessionalSummaryContext = createContext();

export default ProfessionalSummaryContext;

export function ProfessionalSummaryProvider({ children }) {
    const [professionalSummary, setProfessionalSummary] = useState([]);

    const setProfessionalSummaryHandler = (id, obj) => {
        setProfessionalSummary(prev => {
            const exist = prev.some(item => item.resumeId === id);

            if(exist) {
                return prev.map(item => item.resumeId === id ? { ...item, ...obj } : item);
            }

            return [...prev, { resumeId: id, ...obj }];
        });
    };

    const obj = {
        professionalSummary,
        setProfessionalSummary: setProfessionalSummaryHandler
    }

  return (
    <ProfessionalSummaryContext.Provider value={obj}>
        {children}
    </ProfessionalSummaryContext.Provider>
  )
}
