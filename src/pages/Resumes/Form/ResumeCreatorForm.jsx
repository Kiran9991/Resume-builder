import React, { useContext, useState } from "react";
import ResumesContext from "../../../context/ResumeStore";
import styles from "./ResumeCreatorForm.module.css";
import closeIcon from "../../../../public/cross.png";
import { useNavigate } from "react-router-dom";

export default function ResumeCreatorForm({ onClose }) {
  const { addResume, resumes } = useContext(ResumesContext);
  const [enteredtitle, setEnteredTitle] = useState("");
  const navigate = useNavigate();

  const submitFormHandler = (e) => {
    e.preventDefault();
    addResume(enteredtitle);
    const newId = resumes.length > 0 ? resumes[resumes.length - 1].id + 1 : 1;
    navigate(`/resume/${newId}`);
  };

  return (
    <form onSubmit={submitFormHandler} className={styles.formContainer}>
      <div>
        <h3>Create a Resume</h3>
        <img src={closeIcon} height={20} onClick={() => onClose()} />
      </div>
      <input
        type="text"
        placeholder="Enter Resume Title..."
        onChange={(e) => setEnteredTitle(e.target.value)}
        value={enteredtitle}
      />
      <button type="submit">Create Resume</button>
    </form>
  );
}
