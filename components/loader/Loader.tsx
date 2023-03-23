import styles from "./Loader.module.css";

const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
  </div>
);

export { Loader };
