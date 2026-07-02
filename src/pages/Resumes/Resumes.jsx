import React, { useContext, useState } from "react";

import styles from "./Resumes.module.css";
import ResumesContext from "../../context/ResumeStore";
import trashIcon from "../../../public/trash.png";
import editIcon from "../../../public/edit.png";
import addIcon from "../../../public/plus.png";
import uploadIcon from "../../../public/cloud-computing.png";
import Modal from "../../modal/Modal";
import ResumeCreatorForm from "./Form/ResumeCreatorForm";
import { useNavigate } from "react-router-dom";

export default function Resumes() {
  const { resumes, deleteResume } = useContext(ResumesContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ResumeCreatorForm onClose={() => setIsOpen(false)}/>
      </Modal>
      {/* Resume Create */}
      <div className={styles.container1}>
        <button onClick={() => setIsOpen(true)}>
          <div>
            <img src={addIcon} height={50} />
          </div>
          <div>Create Resume</div>
        </button>
        <button>
          <div>
            <img src={uploadIcon} height={50} />
          </div>
          <div>Upload Existing</div>
        </button>
      </div>

      <hr />

      {/* Resumes Lists */}
      <div className={styles.container2}>
        {resumes.map((item) => (
          <button key={item.id} onClick={() => navigate("/resume")}>
            <div className={styles.editButtons}>
              <div
                className={styles.icon}
                onClick={() => deleteResume(item.id)}
              >
                <img src={trashIcon} height={16} />
              </div>
              <div className={styles.icon}>
                <img src={editIcon} height={16} />
              </div>
            </div>
            <div className={styles.btnName}>{item.title}</div>
            <div className={styles.date}>Updated on {item.date}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
