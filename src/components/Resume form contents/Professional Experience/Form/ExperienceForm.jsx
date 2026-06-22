import React, { useContext } from "react";

import styles from "./ExperienceForm.module.css";
import FormWithTitle from "../../Form/FormWithTitle";
import ProfessionalExpContext from "../../../../context/professionalExpStore";

export default function ExperienceForm({ item }) {
  const { updateForm, deleteForm } = useContext(ProfessionalExpContext);

  return (
    <FormWithTitle title={"Experience"} id={item.id} fun={() => deleteForm(item.id)}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Company Name"
          onChange={(e) => updateForm(item.id, { companyName: e.target.value } )}
          value={item.companyName}
        />
        <input
          type="text"
          placeholder="Job Title"
          onChange={(e) => updateForm(item.id, { jobTitle: e.target.value })}
          value={item.jobTitle}
        />
        <input
          type="date"
          onChange={(e) => updateForm(item.id, { joiningDate: e.target.value })}
          value={item.joiningDate}
        />
        <input
          type="date"
          onChange={(e) => updateForm(item.id, { endDate: e.target.value })}
          value={item.endDate}
        />
      </div>
      <div className={styles.formCheckBox}>
        <input
          type="checkbox"
          checked={item.currentlyWorking}
          onChange={(e) =>
            updateForm(item.id, { currentlyWorking: e.target.checked })
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
        onChange={(e) => updateForm(item.id, { jobDescription: e.target.value })}
        value={item.jobDescription}
      />
    </FormWithTitle>
  );
}
