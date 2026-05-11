import React from 'react'
import styles from './ResumeForm.module.css';

export default function ResumeForm() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.container1}>
        <form>
            <div className={styles.formInput}>
            <label >Full name</label>
            <input type='text' placeholder='Enter your Full name' />
            </div>

            <div className={styles.formInput}>
            <label >Email Address</label>
            <input type='email' placeholder='Enter your email address' />
            </div>

            <div className={styles.formInput}>
            <label >Phone Number</label>
            <input type='number' placeholder='Enter your phone number' />
            </div>

            <div className={styles.formInput}>
            <label >Location</label>
            <input type='text' placeholder='Enter your location' />
            </div>

            <div className={styles.formInput}>
            <label >Profession</label>
            <input type='text' placeholder='Enter your profession' />
            </div>

            <div className={styles.formInput}>
            <label >LinkedIn Profile</label>
            <input type='text' placeholder='Enter your linkedin profile' />
            </div>

            <div className={styles.formInput}>
            <label >Personal Website</label>
            <input type='text' placeholder='Enter your personal websie' />
            </div>
        </form>
      </div>
      <div className={styles.container2}>

      </div>
    </div>
  )
}
