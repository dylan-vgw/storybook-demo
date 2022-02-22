import React from "react";
import styles from "./Button.module.css";

export interface Props {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
