import React, { createContext, useEffect, useState } from 'react'

const ProjectContext = createContext();

export default ProjectContext;

export function ProjectProvider({ children }) {
    const LsProject = JSON.parse(localStorage.getItem("projectDetails")) || [];

    const [ projectDetails, setProjectDetails ] = useState(LsProject);

    useEffect(() => {
        localStorage.setItem("projectDetails", JSON.stringify(projectDetails));
    }, [projectDetails]);

    const addProjectFormHandler = () => {
        setProjectDetails((prev) => {
            const newId = prev.length > 0 ? prev[prev.length-1].id + 1 : 1;
            return [...prev, { id: newId,
                name:'', type:'', description:''
             }];
        })
    }

    const updateProjectFormHandler = (id, obj) => {
        setProjectDetails((prev) => prev.map((item) => item.id == id ? { ...item, ...obj } : item));
    }

    const deleteProjectFormHandler = (id) => {
        setProjectDetails(prev => [...prev.filter((item) => item.id != id)]);
    }

    const projectObj = {
        projectDetails,
        addProjectForm: addProjectFormHandler,
        updateProjectForm: updateProjectFormHandler,
        deleteProjectForm: deleteProjectFormHandler
    }

  return (
      <ProjectContext.Provider value={projectObj}>
        {children}
      </ProjectContext.Provider>
  )
}
