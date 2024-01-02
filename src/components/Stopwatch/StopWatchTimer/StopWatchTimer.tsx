import { useRef, useState } from "react";

import { Button } from "../../Button";

import { TimerCounter } from "./TimerCounter";
import styles from "./styles.module.css";

export function StopWatchTimer() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [nowTime, setNowTime] = useState<number | null>(null);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [ms, setMs] = useState(0);
  const intervalRef = useRef<number | null>(null);

  function startHandler() {
    const currentDate = Date.now();

    setStartTime(currentDate);
    setNowTime(currentDate);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setNowTime(Date.now);
    }, 10);
  }

  function stopHandler() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  function resetHandler() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setMin(0);
    setSec(0);
    setMs(0);
  }

  return (
    <div className={styles.container}>
      <div className={styles.timer}>
        <TimerCounter value={min} />:<TimerCounter value={sec} />:
        <TimerCounter value={ms} />
      </div>
      <div className={styles.buttons}>
        <Button
          content="Start"
          classname={styles.start}
          onClick={startHandler}
        />
        <Button content="Stop" classname={styles.stop} onClick={stopHandler} />
        <Button
          content="Reset"
          classname={styles.reset}
          onClick={resetHandler}
        />
      </div>
    </div>
  );
}
