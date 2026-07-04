import React, { useContext } from "react";
import styles from "./ResumeHeader.module.css";
import PersonalInfoContext from "../../../context/personalInfoStore";

export default function ResumeHeader({ obj }) {
  const { personObj } = useContext(PersonalInfoContext);


  return (
    <div className={styles.personalData}>
      <h1>{obj.name}</h1>
      <div className={styles.p1}>
        <span>{obj.email}</span>
        <span>{obj.phNumber}</span>
        <span>{obj.address}</span>
        <span>{obj.linkedin}</span>
        <span>{obj.website}</span>
      </div>
    </div>
  );
}
