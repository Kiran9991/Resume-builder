import React, { useContext } from "react";

import styles from "./ResumePreview.module.css";
import PersonalInfoContext from "../../context/personalInfoStore";
import ProfessionalSummaryContext from "../../context/professionalSummaryStore";
import ProfessionalExpContext from "../../context/professionalExpStore";
import EducationContext from "../../context/educationStore";
import ProjectContext from "../../context/projectStore";

export function PrintPdf() {
  let divContents = document.getElementById("resumeDownload").innerHTML;
  let printWindow = window.open("", "", "height=500, width=500");
  const styles = Array.from(document.styleSheets)
    .map((styleSheet) => {
      try {
        if (styleSheet.href) {
          return `<link rel="stylesheet" href="${styleSheet.href}">`;
        } else {
          return `<style>
            ${Array.from(styleSheet.cssRules)
              .map((rule) => rule.cssText)
              .join("")}
          </style>`;
        }
      } catch (e) {
        return e;
      }
    })
    .join("");
  console.log(styles);
  printWindow.document.open();
  printWindow.document.write(`
                <html>
                <head>
                    <title>Print Div Content</title>

                    ${styles}
                    <style>
                        .previewSection{
                        margin:50px;
                        }
                    </style>
                </head>
                <body>
                    ${divContents}
                </body>
                </html>
            `);
  printWindow.document.close();
  printWindow.print();
}

export default function ResumePreview() {
  const { personObj } = useContext(PersonalInfoContext);
  const { professionalSummary } = useContext(ProfessionalSummaryContext);
  const { expDetails } = useContext(ProfessionalExpContext);
  const { projectDetails } = useContext(ProjectContext);
  const { educationDetails } = useContext(EducationContext);

  return (
    <div className={styles.previewSection} id="resumeDownload">
      <div className={styles.personalData}>
        <h1>{personObj.name}</h1>
        <div className={styles.p1}>
          <span>{personObj.email}</span>
          <span>{personObj.phNumber}</span>
          <span>{personObj.address}</span>
          <span>{personObj.linkedin}</span>
          <span>{personObj.website}</span>
        </div>
      </div>

      {professionalSummary && (
        <section className={styles.s1}>
          <h2>Profession Summary</h2>
          <p>{professionalSummary}</p>
        </section>
      )}

      {expDetails.length > 0 && (
        <section className={styles.s2}>
          <h2>PROFESSIONAL EXPERIENCE</h2>
          {expDetails.map((item) => (
            <div key={item.id} className={styles.jobTitle}>
              <div className={styles.jobRoleTitle}>
                <div className={styles.jobTitleName}>
                  <h3>{item.jobTitle}</h3>
                  <h3>{item.companyName}</h3>
                </div>
                <div className={styles.duration}>
                  {customDate(item.joiningDate)} -{" "}
                  {item.currentlyWorking ? "Present" : customDate(item.endDate)}
                </div>
              </div>

              <p>{item.jobDescription}</p>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projectDetails.length > 0 && (
        <section className={styles.s3}>
          <h2>PROJECTS</h2>
          {projectDetails.map((item) => (
            <div className={styles.jobTitle} key={item.id}>
              <div className={styles.jobRoleTitle}>
                <div className={styles.jobTitleName}>
                  <h3>{item.name}</h3>
                  <h3>{item.type}</h3>
                </div>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </section>
      )}

      {educationDetails.length > 0 && (
        <section className={styles.s4}>
          <h2>EDUCATION</h2>
          {educationDetails.map((item) => (
            <div className={styles.jobRoleTitle} key={item.id}>
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
        </section>
      )}
    </div>
  );
}

function customDate(newDate) {
  const date = new Date(newDate);

  const result = `${date.toLocaleString("en-US", { month: "short" })} ${date.getFullYear()}`;

  return result;
}
