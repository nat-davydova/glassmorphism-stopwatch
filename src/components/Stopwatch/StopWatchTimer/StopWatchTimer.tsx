import { useEffect, useRef, useState } from "react";

import { Button } from "../../Button";

import { TimerCounter } from "./TimerCounter";
import { MINUTES_LIMIT } from "./consts";
import styles from "./styles.module.css";

export function StopWatchTimer() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [nowTime, setNowTime] = useState<number | null>(null);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [ms, setMs] = useState(0);
  const intervalRef = useRef<number | null>(null);

  function stopHandler() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  useEffect(() => {
    if (startTime !== null && nowTime !== null) {
      const elapsedTime = nowTime - startTime;

      const milliseconds = Math.floor((elapsedTime % 1000) / 10);
      const seconds = Math.floor((elapsedTime / 1000) % 60);
      const minutes = Math.floor(elapsedTime / 1000 / 60);

      if (minutes === MINUTES_LIMIT) {
        stopHandler();
      }

      setMin(minutes);
      setSec(seconds);
      setMs(milliseconds);
    }
  }, [nowTime, startTime]);

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

  function resetHandler() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setStartTime(null);
    setNowTime(null);
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
