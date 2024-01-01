import styles from "./styles.module.css";

export interface ITimerCounterProps {
  value: number;
}

export function TimerCounter({ value }: ITimerCounterProps) {
  return <div className={styles.counter}>{value}</div>;
}
