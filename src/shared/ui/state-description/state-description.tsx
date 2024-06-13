import { FC } from "react";
import styles from "./state-description.module.scss";

type StateDescriptionProps = {
  text?: string;
};

export const StateDescription: FC<StateDescriptionProps> = ({ text }) => {
  return <h3 className={styles.label}>{text}</h3>;
};
