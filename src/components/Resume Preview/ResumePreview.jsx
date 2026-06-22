import React, { useContext } from "react";

import styles from "./ResumePreview.module.css";
import PersonalInfoContext from "../../context/personalInfoStore";
import ProfessionalSummaryContext from "../../context/professionalSummaryStore";
import ProfessionalExpContext from "../../context/professionalExpStore";

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

      {professionalSummary && <section className={styles.s1}>
        <h2>Profession Summary</h2>
        <p>{professionalSummary}</p>
      </section>}

      {expDetails.length > 0 && (
        <section className={styles.s2}>
          <h2>PROFESSIONAL EXPERIENCE</h2>
          {expDetails.map((item) => (
            <div key={item.id} className={styles.jobTitle}>
              <div className={styles.jobRoleTitle}>
                <div className={styles.jobTitleName}>
                  <h3>{item.companyName}</h3>
                  <h3>{item.jobTitle}</h3>
                </div>
                <div className={styles.duration}>
                  {item.joiningDate} - {item.endDate}
                </div>
              </div>

              <p>{item.jobDescription}</p>
            </div>
          ))}
        </section>
      )}

      <section className={styles.s3}>
        <h2>PROJECTS</h2>
        <div className={styles.jobTitle}>
          <div className={styles.jobRoleTitle}>
            <div className={styles.jobTitleName}>
              <h3>Group chat app</h3>
            </div>
          </div>
          <p>
            Experienced in building projects such as e-commerce platforms,
            real-time chat applications, and expense tracking systems. Strong
            problem-solving abilities combined with an engineering background
            and practical
          </p>
        </div>
      </section>

      <section className={styles.s4}>
        <h2>EDUCATION</h2>
        <div className={styles.jobRoleTitle}>
          <div className={styles.jobTitleName}>
            <h3>Bachor's of Engineering in Mechanical Engineering</h3>
          </div>
          <div className={styles.duration}>Oct 2026</div>
        </div>
        <p>College Name</p>
        <p>Perecentage</p>
      </section>
    </div>
  );
}
