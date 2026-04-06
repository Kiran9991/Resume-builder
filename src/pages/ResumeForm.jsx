import React from 'react'
import styles from './ResumeForm.module.css';

export default function ResumeForm() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.Container1}>
        <form>
            <div>
            <label>Full name</label>
            <input type='text' placeholder='Enter your Full name' />
            </div>

            <div>
            <label>Email Address</label>
            <input type='email' placeholder='Enter your Full name' />
            </div>

            <div>
            <label>Email Address</label>
            <input type='email' placeholder='Enter your Full name' />
            </div>
        </form>
      </div>
      <div className={styles.container2}>

      </div>
    </div>
  )
}
