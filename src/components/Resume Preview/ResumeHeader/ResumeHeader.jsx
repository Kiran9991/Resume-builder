import React, { useContext } from "react";
import styles from "./ResumeHeader.module.css";
import PersonalInfoContext from "../../../context/personalInfoStore";

export default function ResumeHeader() {
  const { personObj } = useContext(PersonalInfoContext);
  return (
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
  );
}
