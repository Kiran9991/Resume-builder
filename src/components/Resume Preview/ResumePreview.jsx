import React, { useContext } from "react";

import styles from "./ResumePreview.module.css";
import PersonalInfoContext from "../../context/personalInfoStore";

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
    console.log(styles)
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

      <section className={styles.s1}>
        <h2>Profession Summary</h2>
        <p>
          Results-driven MERN Stack Developer with hands-on experience building
          full-stack web applications using MongoDB, Express.js, React.js, and
          Node.js. Skilled in developing scalable REST APIs, responsive user
          interfaces, and database-driven applications with strong understanding
          of JavaScript, asynchronous programming, and modern web development
          practices.
        </p>
      </section>

      <section className={styles.s2}>
        <h2>PROFESSIONAL EXPERIENCE</h2>
        <div className={styles.jobTitle}>
          <div className={styles.jobRoleTitle}>
            <div className={styles.jobTitleName}>
              <h3>Graduate Apprentice Traine</h3>
              <h3>KSPG</h3>
            </div>
            <div className={styles.duration}>Jan 2026 - Present</div>
          </div>

          <p>
            Experienced in building projects such as e-commerce platforms,
            real-time chat applications, and expense tracking systems. Strong
            problem-solving abilities combined with an engineering background
            and practical
          </p>
        </div>
      </section>

      <section className={styles.s3}>
        <h2>PROJECTS</h2>
        <div className={styles.jobTitle}>
          <div className={styles.jobRoleTitle}>
            <div className={styles.jobTitleName}>
              <h3>Group chat app</h3>
              {/* <h3>KSPG</h3> */}
            </div>
            {/* <div className={styles.duration}>Jan 2026 - Present</div> */}
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
