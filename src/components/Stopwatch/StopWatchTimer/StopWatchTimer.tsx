import { TimerCounter } from "./TimerCounter";
import styles from "./styles.module.css";

export function StopWatchTimer() {
  return (
    <div className={styles.container}>
      <div className={styles.timer}>
        <TimerCounter value={15} />:<TimerCounter value={15} />:
        <TimerCounter value={15} />
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} type="button">
          Start
        </button>
        <button className={styles.button} type="button">
          Stop
        </button>
        <button className={styles.button} type="button">
          Reset
        </button>
      </div>
    </div>
  );
}
