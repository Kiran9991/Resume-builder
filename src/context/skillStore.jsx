import React, { createContext, useEffect, useState } from "react";

const SkillsContext = createContext();

export default SkillsContext;

export function SkillProvider({ children }) {
  const LsSkills = JSON.parse(localStorage.getItem("skills")) || [];

  const [skills, setSkills] = useState(LsSkills);

  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  const addSkillsHandler = (skills) => {
    setSkills((prev) => [...prev, skills]);
  };

  const deleteSkillsHandler = (val) => {
    setSkills((prev) => [...prev.filter((item) => item != val)]);
  };

  const skillsObj = {
    skills,
    addSkill: addSkillsHandler,
    deleteSkill: deleteSkillsHandler,
  };

  return (
    <SkillsContext.Provider value={skillsObj}>
        {children}
    </SkillsContext.Provider>
  );
}
