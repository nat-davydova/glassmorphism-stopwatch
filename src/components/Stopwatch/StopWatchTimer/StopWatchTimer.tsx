import { TimerCounter } from "./TimerCounter";
import styles from "./styles.module.css";

export function StopWatchTimer() {
  return (
    <div className={styles.timer}>
      <TimerCounter value={15} />:<TimerCounter value={15} />:
      <TimerCounter value={15} />
    </div>
  );
}
