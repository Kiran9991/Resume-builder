import React, { useContext } from "react";

import styles from "./EducationForm.module.css";
import FormWithTitle from "../../Form/FormWithTitle";
import EducationContext from "../../../../context/educationStore";

export default function EducationForm({ item }) {
  const { addEducationForm } = useContext(EducationContext);

  return (
    <FormWithTitle
      title={"Education"}
      id={item.id}
      fun={() => deleteEducationForm(item.id)}
    >
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Institution Name"
          onChange={(e) =>
            updateEducationForm(item.id, { name: e.target.value })
          }
          value={item.name}
        />
        <input
          type="text"
          placeholder="Degree(e.g., Bachelor's, Master)"
          onChange={(e) =>
            updateEducationForm(item.id, { degree: e.target.value })
          }
          value={item.degree}
        />
        <input
          type="text"
          placeholder="Field of Study"
          onChange={(e) =>
            updateEducationForm(item.id, { fieldOfStudy: e.target.value })
          }
          value={item.fieldOfStudy}
        />
        <input
          type="month"
          onChange={(e) =>
            updateEducationForm(item.id, { dateComplete: e.target.value })
          }
          value={item.dateComplete}
        />
        <input
          type="number"
          placeholder="GPA(optional)"
          onChange={(e) =>
            updateEducationForm(item.id, { gpa: e.target.value })
          }
          value={item.gpa}
        />
      </div>
    </FormWithTitle>
  );
}
