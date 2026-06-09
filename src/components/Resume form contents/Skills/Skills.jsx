import React, { useState } from "react";
import FormTitle from "../Form/Form Title/FormTitle";
import styles from "./Skills.module.css";
import EmptyItems from "../Empty Items/EmptyItems";

export default function Skills() {
  const [enteredSkill, setEnteredSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!enteredSkill) return;
    setSkills((prev) => [...prev, enteredSkill]);
    setEnteredSkill("");
  };

  const deleteHandler = (id) => {
    setSkills((prev) => [...prev.filter((ele, idx) => idx != id)]);
  };

  let content = (
    <div className={styles.listSkillTag}>
      {skills &&
        skills.map((ele, idx) => (
          <div key={idx} className={styles.skillTag}>
            <div>{ele}</div>
            <button onClick={() => deleteHandler(idx)}>
              <div className={styles.cross}>
                <div className={styles.div1}></div>
                <div className={styles.div2}></div>
              </div>
            </button>
          </div>
        ))}
    </div>
  );

  if (skills.length == 0)
    content = <EmptyItems text1={"skills"} text2={"add"} />;

  return (
    <FormTitle
      title={"Skills"}
      description={"Add your technical and soft skills"}
    >
      <form className={styles.inputContainer} onSubmit={submitFormHandler}>
        <input
          type="text"
          placeholder="Enter a skill (e.g., JavaScript, Project Management)"
          value={enteredSkill}
          onChange={(e) => setEnteredSkill(e.target.value)}
        />
        <button type="submit">+Add</button>
      </form>
      {content}
      <div className={styles.tipContainer}>
        <p>
          <span>Tip:</span>
          Add 8-12 relevant skills. Include both technical skills (programming
          languages, tools) and soft skills (leadership, communication).
        </p>
      </div>
    </FormTitle>
  );
}
