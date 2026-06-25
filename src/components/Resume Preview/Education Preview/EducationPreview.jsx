import React, { useContext } from "react";
import EducationContext from "../../../context/educationStore";
import styles from "./EducationPreview.module.css";
import customDate from "../../../utils/customDate";

export default function EducationPreview() {
  const { educationDetails } = useContext(EducationContext);
  return (
    <>
      {educationDetails.length > 0 && (
        <section className={styles.container}>
          <h2>EDUCATION</h2>
          <div className={styles.container2}>
          {educationDetails.map((item) => (
            <div className={styles.titleContainer} key={item.id}>
              <div className={styles.jobTitleName}>
                {item.degree && (
                  <h3>{`${item.degree} in ${item.fieldOfStudy}`}</h3>
                )}
              </div>
              {item.dateComplete && (
                <div className={styles.duration}>
                  {customDate(item.dateComplete)}
                </div>
              )}
              <p>{item.name}</p>
              <p>{item.gpa}</p>
            </div>
          ))}
          </div>
        </section>
      )}
    </>
  );
}
