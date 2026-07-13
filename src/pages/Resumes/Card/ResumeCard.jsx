import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./ResumeCard.module.css";
import { trashIcon, editIcon } from "../../../../public/index.jsx";
import ResumesContext from "../../../context/ResumeStore";

export default function ResumeCard() {
  const { resumes, deleteResume } = useContext(ResumesContext);
  const navigate = useNavigate();

  return (
    <>
    {resumes.map((item) => (
      <button className={styles.cardBtn} key={item.id} onClick={() => navigate(`/resume/${item.id}`)}>
        <div className={styles.editButtons}>
          <div
            className={styles.icon}
            onClick={(e) => {
            e.stopPropagation();
            deleteResume(item.id);
          }}
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
    </>
  )
}