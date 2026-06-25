import React, { useContext } from "react";
import ProjectContext from "../../../context/projectStore";
import styles from "./ProjectPreview.module.css";

export default function ProjectPreview() {
  const { projectDetails } = useContext(ProjectContext);

  return (
    <>
      {projectDetails.length > 0 && (
        <section className={styles.container}>
          <h2>PROJECTS</h2>
          <div className={styles.container1}>
          {projectDetails.map((item) => (
            <div className={styles.container2} key={item.id}>
              <div className={styles.jobRoleTitle}>
                <div className={styles.jobTitleName}>
                  <h3>{item.name}</h3>
                  <h3>{item.type}</h3>
                </div>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
          </div>
        </section>
      )}
    </>
  );
}
