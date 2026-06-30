import React, { useContext } from "react";

import styles from "./Resumes.module.css";
import ResumesContext from "../../context/ResumeStore";
import trashIcon from "../../../public/trash.png";
import editIcon from "../../../public/edit.png";

export default function Resumes() {
  const { resumes, addResume, deleteResume } = useContext(ResumesContext);

  return (
    <div className={styles.container}>
      {/* Resume Create */}
      <div className={styles.container1}>
        <button onClick={() => addResume()}>Create Resume</button>
        <button>Upload Existing</button>
      </div>

      <hr />

      {/* Resumes Lists */}
      <div className={styles.container2}>
        {resumes.map((item) => (
          <button key={item.id}>
            <div className={styles.editButtons}>
              <div className={styles.icon}
              onClick={() => deleteResume(item.id)}
              >
                <img src={trashIcon} height="16px" />
              </div>
              <div className={styles.icon}>
                <img src={editIcon} height="16px" />
              </div>
            </div>
            <div className={styles.btnName}>{item.title}</div>
            <div>updated</div>
          </button>
        ))}
      </div>
    </div>
  );
}
