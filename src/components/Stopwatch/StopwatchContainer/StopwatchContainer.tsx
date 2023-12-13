import { ReactNode } from "react";

import styles from "./StopwatchContainer.module.css";

interface IStopwatchContainerProps {
  children: ReactNode | ReactNode[];
}

export function StopwatchContainer({ children }: IStopwatchContainerProps) {
  return <div className={styles.stopwatchContainer}>{children}</div>;
}
