import React from 'react';

import styles from './Resumes.module.css';

export default function Resumes() {
  return (
    <div className={styles.container}>
      {/* Resume Create */}
      <div className={styles.container1}>
        <div>Create Resume</div>
        <div>Upload Existing</div>
      </div>
      {/* Resumes Lists */}
      <div className={styles.container2}>
        <div>Resumes List 1</div>
        <div>Resumes List 2</div>
        <div>Resumes List 3</div>
      </div>
    </div>
  )
}
