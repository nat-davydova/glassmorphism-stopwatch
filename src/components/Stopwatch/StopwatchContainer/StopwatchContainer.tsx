import { ReactNode } from "react";

import styles from "./styles.module.css";

interface IStopwatchContainerProps {
  children: ReactNode | ReactNode[];
}

export function StopwatchContainer({ children }: IStopwatchContainerProps) {
  return (
    <div className={styles.stopwatchContainer}>
      <div className={`${styles.circle} ${styles.circle1}`}></div>
      <div className={`${styles.circle} ${styles.circle2}`}></div>
      <div className={`${styles.circle} ${styles.circle3}`}></div>
      <div className={styles.stopWatchBody}>{children}</div>
    </div>
  );
}
