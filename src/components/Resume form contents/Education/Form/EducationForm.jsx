import React from "react";

import styles from './EducationForm.module.css';
import FormWithTitle from "../../Form/FormWithTitle";

export default function EducationForm({ id, deleteId }) {
  return (
    <FormWithTitle title={'Education'} id={id} fun={deleteId}>
        <div className={styles.inputContainer}>
            <input type="text" placeholder="Institution Name" />
            <input type="text" placeholder="Degree(e.g., Bachelor's, Master)" />
            <input type="text" placeholder="Field of Study" />
            <input type="date"  />
            <input type="number" placeholder="GPA(optional)" />
        </div>
    </FormWithTitle>
  );
}
