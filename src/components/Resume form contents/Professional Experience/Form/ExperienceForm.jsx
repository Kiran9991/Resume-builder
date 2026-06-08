import React from "react";

import styles from "./ExperienceForm.module.css";
import FormWithTitle from "../../Form/FormWithTitle";

export default function ExperienceForm({ id, deleteId }) {
  return (
    <FormWithTitle title={"Experience"} id={id} fun={deleteId}>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="Company Name" />
        <input type="text" placeholder="Job Title" />
        <input type="date" />
        <input type="date" />
      </div>
      <div className={styles.formCheckBox}>
        <input type="checkbox" />
        <label>Currently working here</label>
      </div>
      <div className={styles.jobdescription}>
        <div>Job Description</div>
        <button>Enhance with AI</button>
      </div>
      <textarea
        className={styles.descriptionArea}
        placeholder="Describe your key responsibilities and achievements..."
        rows={5}
        cols={60}
      />
    </FormWithTitle>
  );
}
