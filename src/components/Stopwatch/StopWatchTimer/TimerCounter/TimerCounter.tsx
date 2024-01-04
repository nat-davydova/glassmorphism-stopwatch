import styles from "./styles.module.css";

export interface ITimerCounterProps {
  value: number;
}

export function TimerCounter({ value }: ITimerCounterProps) {
  const formattedValue = value < 10 ? `0${value}` : value;

  return <div className={styles.counter}>{formattedValue}</div>;
}
