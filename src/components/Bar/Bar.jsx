import styles from './Bar.module.css';

export default function Bar({ percentage }) {
  return (
    <>
        <div className={styles.progressBar}></div>
        <div className={styles.bar} style={{ width: `${percentage}%` }} />
    </>
  );
}

