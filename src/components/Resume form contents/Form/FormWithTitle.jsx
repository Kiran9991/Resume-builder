import React from "react";

import styles from './FormWithTitle.module.css'

export default function FormWithTitle({ title, id, fun, children }) {
  return (
    <form className={styles.container}>
      <div className={styles.titleContainer}>
        <h4>{title} #{id}</h4>
        <button type="button" onClick={() => fun(id)}>
          Delete
        </button>
      </div>
      {children}
    </form>
  );
}
