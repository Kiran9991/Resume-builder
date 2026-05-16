import React from "react";
import html2pdf from "html2pdf.js";

import styles from "./ResumePreview.module.css";

export const DownloadPdf = () => {
  const element = document.getElementById("resumeDownload");

  html2pdf().from(element).save("Resume.pdf");
};

export default function ResumePreview() {
  return (
    <div className={styles.previewSection} id="resumeDownload">
      <div className={styles.personalData}>
        <h1>Title</h1>
        <div className={styles.p1}>
          <span>Email kiranagiwale3@gmail.cm</span>
          <span>phone no. 87543024980</span>
          <span>Address At post talegaoon dabhade</span>
          <span>linkedin url www.kiranagiwale.com</span>
          <span>personal website www.portfolio.ccom</span>
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
