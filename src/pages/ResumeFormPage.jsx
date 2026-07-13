import styles from "./ResumeFormPage.module.css";
import Resumeform from "../components/Resume form contents/ResumeForm/ResumeForm";
import ResumePreview from "../components/Resume Preview/ResumePreview";

export default function ResumeFormPage() {

  return (
    <div className={styles.resumeContainerWrapper}>
      <div className={styles.resumeFormContainer}>
        <ResumePreview />
      </div>
    </div>
  );
}
