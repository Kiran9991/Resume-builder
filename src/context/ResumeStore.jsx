import React, { createContext, useEffect, useState } from "react";

const ResumesContext = createContext();

export default ResumesContext;

export function ResumesProvider({ children }) {
  const lsResumes = JSON.parse(localStorage.getItem("resumes")) || [];

  const [resumes, setResumes] = useState(lsResumes);

  useEffect(() => {
    localStorage.setItem("resumes", JSON.stringify(resumes));
  }, [resumes]);

  const addResumeHandler = (name) => {
    if (!name) return;
    setResumes((prev) => {
      const newId = prev.length > 0 ? prev[prev.length - 1].id + 1 : 1;
      return [
        ...prev,
        { id: newId, title: name, date: new Date().toLocaleDateString(),
            data:{
              personalInfo:{
                name:'',email:'',phNumber:'',address:'',linkedin:'',website:'',
              },
              professionalSummary:'',
              professionalExp:[],
              education:[],
              project:[],
              skills:[],
            }
         },
      ];
    });
  };

  const deleteResumeHandler = (id) => {
    setResumes((prev) => [...prev.filter((ele) => ele.id != id)]);
  };

  const updateResumeHandler = (id, obj) => {
    setResumes((prev) =>
      prev.map((item) => (item.id == id ? { ...item, ...obj } : item)),
    );
  };

  const updateResumeDataHandler = (id, obj) => {
    setResumes((prev) => 
      prev.map((item) => item.id == id ? { ...item, data: { personalInfo: { ...item.data.personalInfo, ...obj } } } : item ));
  }

  const obj = {
    resumes,
    addResume: addResumeHandler,
    deleteResume: deleteResumeHandler,
    updateResume: updateResumeHandler,
    updateResumeData: updateResumeDataHandler
  };

  return (
    <ResumesContext.Provider value={obj}>{children}</ResumesContext.Provider>
  );
}
