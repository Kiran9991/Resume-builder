import React from "react";
import FormWithTitle from "../../Form/FormWithTitle";
import styles from './ProjectForm.module.css';

export default function ProjectForm({ id, deleteId }) {
  return (
    <FormWithTitle title={"Projects"} id={id} fun={deleteId}>
      <div className={styles.projectFormContainer}>
        <input type="text" placeholder="Project Name" />
        <input type="text" placeholder="Project Type" />
        <textarea rows={6} cols={70} placeholder="Describe your project..." />
      </div>
    </FormWithTitle>
  );
}
