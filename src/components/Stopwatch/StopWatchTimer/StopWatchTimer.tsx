import { Button } from "../../Button";

import { TimerCounter } from "./TimerCounter";
import styles from "./styles.module.css";

export function StopWatchTimer() {
  function handleStart() {
    console.log("start");
  }

  return (
    <div className={styles.container}>
      <div className={styles.timer}>
        <TimerCounter value={2} />:<TimerCounter value={10} />:
        <TimerCounter value={155} />
      </div>
      <div className={styles.buttons}>
        <Button
          content="Start"
          classname={styles.start}
          onClick={handleStart}
        />
        <Button
          content="Stop"
          classname={styles.stop}
          onClick={() => console.log("wow")}
        />
        <Button
          content="Reset"
          classname={styles.reset}
          onClick={() => console.log("wow")}
        />
      </div>
    </div>
  );
}
