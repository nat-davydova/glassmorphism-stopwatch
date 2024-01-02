import { useRef, useState } from "react";

import { Button } from "../../Button";

import { TimerCounter } from "./TimerCounter";
import styles from "./styles.module.css";

export function StopWatchTimer() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [nowTime, setNowTime] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  function handleStart() {
    const currentDate = Date.now();

    setStartTime(currentDate);
    setNowTime(currentDate);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setNowTime(Date.now);
      console.log(nowTime);
    }, 10);
  }

  function handleStop() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
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
        <Button content="Stop" classname={styles.stop} onClick={handleStop} />
        <Button
          content="Reset"
          classname={styles.reset}
          onClick={() => console.log("wow")}
        />
      </div>
    </div>
  );
}
