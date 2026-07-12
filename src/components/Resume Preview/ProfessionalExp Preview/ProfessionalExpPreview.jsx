import React, { useContext } from "react";
import ProfessionalExpContext from "../../../context/professionalExpStore";
import customDate from "../../../utils/customDate";
import styles from "./ProfessionalExpPreview.module.css";

export default function ProfessionalExpPreview({ objArr }) {
  return (
    <>
      {objArr && (
        <section className={styles.container}>
          <h2>PROFESSIONAL EXPERIENCE</h2>
          {objArr.map((item) => (
            <div key={item.formId} className={styles.container1}>
              <div className={styles.titleContainer}>
                <div className={styles.title}>
                  <h3>{item.jobTitle}</h3>
                  <h4>{item.companyName}</h4>
                </div>
                <div className={styles.dates}>
                  {customDate(item.joiningDate)} -{" "}
                  {item.currentlyWorking ? "Present" : customDate(item.endDate)}
                </div>
              </div>
              <p>{item.jobDescription}</p>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
