import React, { useContext } from "react";
import FormWithTitle from "../../Form/FormWithTitle";
import styles from "./ProjectForm.module.css";
import ProjectContext from "../../../../context/projectStore";

export default function ProjectForm({ item }) {
  const { updateProjectForm, deleteProjectForm } = useContext(ProjectContext);
  return (
    <FormWithTitle
      title={"Projects"}
      id={item.id}
      fun={() => deleteProjectForm(item.id)}
    >
      <div className={styles.projectFormContainer}>
        <input
        type="text"
        placeholder="Project Name"
        onChange={(e) => updateProjectForm(item.id, { name: e.target.value })}
        value={item.name}
        />
        <input
          type="text"
          placeholder="Project Type"
          onChange={(e) => updateProjectForm(item.id, { type: e.target.value })}
          value={item.type}
        />
        <textarea
          rows={6}
          cols={70}
          placeholder="Describe your project..."
          onChange={(e) =>
            updateProjectForm(item.id, { description: e.target.value })
          }
          value={item.description}
        />
      </div>
    </FormWithTitle>
  );
}
