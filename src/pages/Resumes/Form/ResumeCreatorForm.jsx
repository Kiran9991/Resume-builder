import React, { useContext, useState } from "react";
import ResumesContext from "../../../context/ResumeStore";
import styles from "./ResumeCreatorForm.module.css";
import closeIcon from "../../../../public/cross.png";
import { useNavigate } from "react-router-dom";

export default function ResumeCreatorForm({ onClose }) {
  const { addResume } = useContext(ResumesContext);
  const [enteredtitle, setEnteredTitle] = useState("");
  const navigate = useNavigate();

  const submitFormHandler = (e) => {
    e.preventDefault();
    addResume(enteredtitle);
    navigate("/resume");
  };

  return (
    <form onSubmit={submitFormHandler} className={styles.formContainer}>
      <div>
        <h3>Create a Resume</h3>
        <img src={closeIcon} height={20} />
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
