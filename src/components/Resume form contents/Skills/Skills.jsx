import React, { useState } from "react";
import FormTitle from "../Form/Form Title/FormTitle";
import styles from "./Skills.module.css";
import EmptyItems from "../Empty Items/EmptyItems";
import { addform } from "../../../utils/addForm";

export default function Skills() {
    const [enteredSkill, setEnteredSkill] = useState('');
    const [skills, setSkills] = useState([]);

    let content = <div>
        {skills && skills.map((ele, idx) => (
            <div>{ele}</div>
        ))}
    </div>

    if(skills.length == 0)
      content = <EmptyItems text1={"skills"} text2={"add"} />

  return (
    <FormTitle
      title={"Skills"}
      description={"Add your technical and soft skills"}
    >
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter a skill (e.g., JavaScript, Project Management)"
          onChange={(e) => setEnteredSkill(e.targer.value)}
        />
        <button onClick={() => addform(skills, setSkills)}>Add</button>
      </div>
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
