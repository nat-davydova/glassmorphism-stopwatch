import { ReactNode } from "react";

interface IStopwatchContainerProps {
  children: ReactNode | ReactNode[];
}

export function StopwatchContainer({ children }: IStopwatchContainerProps) {
  return <div>{children}</div>;
}
