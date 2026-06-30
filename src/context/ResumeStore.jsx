import React, { createContext, useState } from 'react';

const ResumesContext = createContext();

export default ResumesContext;

export function ResumesProvider({ children }) {
    const [resumes, setResumes] = useState([]);

    const addResumeHandler = () => {
        // if(!name) return;
        setResumes((prev) => {
            const newId = prev.length > 0 ? prev[prev.length - 1].id + 1 : 1;
            return [...prev, { id: newId, title: 'Resume no. '+newId }];
        })
    }

    const deleteResumeHandler = (id) => {
        setResumes(prev => [...prev.filter(ele => ele.id != id)]);
    }

    const updateResumeHandler = (id, obj) => {
        setResumes((prev) => prev.map(item => item.id == id ? { ...item, ...obj } : item ));
    }

    const obj = { resumes, 
        addResume: addResumeHandler,
        deleteResume: deleteResumeHandler,
        updateResume: updateResumeHandler
    }

  return (
    <ResumesContext.Provider value={obj}>
        {children}
    </ResumesContext.Provider>
  )
}
