import styles from "./Card.module.css";

export default function Card({ fun, text, icon }) {
  return (
    <button onClick={fun} className={styles.card}>
      <div>
        <img src={icon} height={50} />
      </div>
      <div>{text}</div>
    </button>
  );
}
