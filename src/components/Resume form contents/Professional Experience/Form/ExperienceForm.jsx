import React, { useContext } from "react";

import styles from "./ExperienceForm.module.css";
import FormWithTitle from "../../Form/FormWithTitle";
import ProfessionalExpContext from "../../../../context/professionalExpStore";

export default function ExperienceForm({ item }) {
  const { updateExpform, deleteExpForm } = useContext(ProfessionalExpContext);
  
  return (
    <FormWithTitle title={"Experience"} id={item.formId} fun={() => deleteExpForm(item.formId)}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Company Name"
          onChange={(e) => updateExpform(item.formId, { companyName: e.target.value } )}
          value={item.companyName}
        />
        <input
          type="text"
          placeholder="Job Title"
          onChange={(e) => updateExpform(item.formId, { jobTitle: e.target.value })}
          value={item.jobTitle}
        />
        <input
          type="month"
          onChange={(e) => updateExpform(item.formId , { joiningDate: e.target.value })}
          value={item.joiningDate}
        />
        <input
          type="month"
          onChange={(e) => updateExpform(item.formId, { endDate: e.target.value })}
          value={item.endDate}
          disabled={item.currentlyWorking}
        />
      </div>
      <div className={styles.formCheckBox}>
        <input
          type="checkbox"
          checked={item.currentlyWorking}
          onChange={(e) =>
            updateExpform(item.formId, { currentlyWorking: e.target.checked })
          }
        />
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
        onChange={(e) => updateExpform(item.formId, { jobDescription: e.target.value })}
        value={item.jobDescription}
      />
    </FormWithTitle>
  );
}
