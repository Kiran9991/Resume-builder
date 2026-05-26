import React from 'react';

import styles from './ExperienceForm.module.css';

export default function ExperienceForm() {
  return (
    <form className={styles.formContainer}>
      <div className={styles.expFormContainer}>
        <h4>Experience #1</h4>
        <button>Delete</button>
      </div>
      <div className={styles.inputContainer}>
        <input type='text' placeholder='Company Name'/>
        <input type='text' placeholder='Job Title'/>
        <input type='date'/>
        <input type='date'/>
      </div>
      <div className={styles.formCheckBox}>
        <input type='checkbox'/>
        <label>Currently working here</label>
      </div>
      <div className={styles.jobdescription}>
        <div>Job Description</div>
        <button>Enhance with AI</button>
      </div>
      <textarea
      className={styles.descriptionArea}
      placeholder='Describe your key responsibilities and achievements...'
      rows={5} cols={60}
      />
    </form>
  )
}
