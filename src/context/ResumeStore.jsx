import React, { createContext, useEffect, useState } from "react";

const ResumesContext = createContext();

export default ResumesContext;

export function ResumesProvider({ children }) {
  const lsResumes = JSON.parse(localStorage.getItem("resumes")) || [];

  const [resumes, setResumes] = useState(lsResumes);
  const [count, setCount] = useState(0);

  const limitOfResumeContent = 5;

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
          data: {},
        },
      ];
    });
  };

  const deleteResumeHandler = (id) => {
    setResumes((prev) => [...prev.filter((ele) => ele.id != id)]);
  };

  const increamentCount = () => {
    count < limitOfResumeContent && setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    count > 0 && setCount((prev) => prev - 1);
  };

  const obj = {
    resumes,
    count,
    increamentCount: increamentCount,
    decrementCount: decrementCount,
    addResume: addResumeHandler,
    deleteResume: deleteResumeHandler
  };

  return (
    <ResumesContext.Provider value={obj}>{children}</ResumesContext.Provider>
  );
}
