import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./ResumePage.module.css";
import ResumeCard from "./Card/ResumeCard.jsx";
import { addIcon, uploadIcon } from "../../../public/index.jsx";
import Modal from "../../modal/Modal.jsx";
import ResumeCreatorForm from "./Form/ResumeCreatorForm.jsx";
import Card from "../../components/Card/Card.jsx";

export default function ResumePage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ResumeCreatorForm onClose={() => setIsOpen(false)} />
      </Modal>
      {/* Resume Create */}
      <div className={styles.subContainer}>
        <Card fun={() => setIsOpen(true)} text="Create Resume" icon={addIcon} />
        <Card fun={() => navigate("/upload")} text="Upload Existing" icon={uploadIcon} />
      </div>
      <hr />
      {/* Resumes Lists */}
      <div className={styles.subContainer}>
        <ResumeCard />
      </div>
    </div>
  );
}
