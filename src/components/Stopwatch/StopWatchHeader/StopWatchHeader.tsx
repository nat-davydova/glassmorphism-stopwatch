import styles from "./styles.module.css";

export function StopWatchHeader() {
  return (
    <div className={styles.stopWatchHeader}>
      <h2 className={styles.title}>The Last Stopwatch You Ever Need</h2>
      <p className={styles.description}>Maximum duration - 2 minutes</p>
    </div>
  );
}
