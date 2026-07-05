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
        {
          id: newId,
          title: name,
          date: new Date().toLocaleDateString(),
          data: {
            personalInfo: {
              name: "Your Name",
              email: "",
              phNumber: "",
              address: "",
              linkedin: "",
              website: "",
            },
            professionalSummary: "",
            professionalExp: [],
            education: [],
            project: [],
            skills: [],
          },
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
      prev.map((item) =>
        item.id == id
          ? {
              ...item,
              data: {
                ...item.data,
                personalInfo: {
                  ...item.data.personalInfo,
                  ...obj,
                },
              },
            }
          : item,
      ),
    );
  };

  const updateProfessionalSummaryHandler = (id, str) => {
    setResumes((prev) =>
      prev.map((item) =>
        item.id == id
          ? {
              ...item,
              data: { ...item.data, professionalSummary: str },
            }
          : item,
      ),
    );
  };

  const updateProfessionalExpHandler = (id, id1, obj) => {
    setResumes((prev) => prev.map(item => item.id == id ? {
      ...item, data : {
        ...item.data, professionalExp: [...item.data.professionalExp.map((item) => 
          item.id == id1 ? { ...item, ...obj } : item )]
      }
    } : item ))
  };

  const obj = {
    resumes,
    addResume: addResumeHandler,
    deleteResume: deleteResumeHandler,
    updateResume: updateResumeHandler,
    updateResumeData: updateResumeDataHandler,
    updateProfessionalSummary: updateProfessionalSummaryHandler,
    updateProfessionalExp: updateProfessionalExpHandler
  };

  return (
    <ResumesContext.Provider value={obj}>{children}</ResumesContext.Provider>
  );
}
