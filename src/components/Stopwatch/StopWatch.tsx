import { StopWatchHeader } from "./StopWatchHeader";
import { StopWatchTimer } from "./StopWatchTimer";
import { StopwatchContainer } from "./StopwatchContainer";

export function StopWatch() {
  return (
    <StopwatchContainer>
      <StopWatchHeader />
      <StopWatchTimer />
    </StopwatchContainer>
  );
}
