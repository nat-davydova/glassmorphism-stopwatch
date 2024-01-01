import { ReactNode } from "react";

import styles from "./styles.module.css";

export interface IButtonProps {
  content: string | ReactNode;
  classname?: string;
  onClick: () => void;
}

export function Button({ content, classname, onClick }: IButtonProps) {
  return (
    <button
      className={`${styles.button} ${classname}`}
      onClick={onClick}
      type="button"
    >
      {content}
    </button>
  );
}
