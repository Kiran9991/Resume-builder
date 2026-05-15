import React from 'react'
import styles from './ResumeForm.module.css';

export default function ResumeForm() {
  return (
    <div className={styles.resumeForm}>
      <div className={styles.formSection}>
        <form>
            <div className={styles.inputGroup}>
            <label >Full name</label>
            <input type='text' placeholder='Enter your Full name' />
            </div>

            <div className={styles.inputGroup}>
            <label >Email Address</label>
            <input type='email' placeholder='Enter your email address' />
            </div>

            <div className={styles.inputGroup}>
            <label >Phone Number</label>
            <input type='number' placeholder='Enter your phone number' />
            </div>

            <div className={styles.inputGroup}>
            <label >Location</label>
            <input type='text' placeholder='Enter your location' />
            </div>

            <div className={styles.inputGroup}>
            <label >Profession</label>
            <input type='text' placeholder='Enter your profession' />
            </div>

            <div className={styles.inputGroup}>
            <label >LinkedIn Profile</label>
            <input type='text' placeholder='Enter your linkedin profile' />
            </div>

            <div className={styles.inputGroup}>
            <label >Personal Website</label>
            <input type='text' placeholder='Enter your personal websie' />
            </div>
        </form>
      </div>

      <div className={styles.previewSection}>
        <div className={styles.personalData}>
          <h3>Title</h3>
          <ul>
            <li>Email id</li>
            <li>phone no.</li>
            <li>Address</li>
            <li>Linkedin url</li>
            <li>personal website</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
