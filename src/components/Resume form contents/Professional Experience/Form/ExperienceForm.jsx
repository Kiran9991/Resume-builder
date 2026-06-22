import React, { useContext, useState } from "react";

import styles from "./ExperienceForm.module.css";
import FormWithTitle from "../../Form/FormWithTitle";
import ProfessionalExpContext from "../../../../context/professionalExpStore";

export default function ExperienceForm({ id, deleteId }) {
  const { expDetails, setExpDetails } = useContext(ProfessionalExpContext);

  const [obj, setObj] = useState({
    id,
    companyName:'', jobTitle:'', joiningDate:'', endDate:'', currentlyWorking:false,
    expDescription:''
  })

  // console.log(expDetail)

  const expDetailObj = obj;

  return (
    <FormWithTitle title={"Experience"} id={id} fun={deleteId}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Company Name"
          onChange={(e) => setExpDetails([...expDetails, { id, companyName: e.target.value}])}
          value={expDetails.companyName}
        />
        <input
          type="text"
          placeholder="Job Title"
          onChange={(e) => setExpDetails({ ...expDetailObj, jobTitle: e.target.value })}
          value={expDetailObj.jobTitle}
        />
        <input
          type="date"
          onChange={(e) => setExpDetails({ ...expDetailObj, joiningDate: e.target.value })}
          value={expDetailObj.joiningDate}
        />
        <input
          type="date"
          onChange={(e) => setExpDetails({ ...expDetailObj, endDate: e.target.value })}
          value={expDetailObj.endDate}
        />
      </div>
      <div className={styles.formCheckBox}>
        <input
          type="checkbox"
          checked={expDetailObj.currentlyWorking}
          onChange={(e) =>
            setExpDetails({ ...expDetailObj, currentlyWorking: e.target.checked })
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
        onChange={(e) => setExpDetails({ ...expDetailObj, expDescription: e.target.value })}
        value={expDetailObj.expDescription}
      />
    </FormWithTitle>
  );
}
