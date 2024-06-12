import { FC } from "react";
import styles from "./label.module.scss";

type LabelProps = {
  text: string;
};

export const Label: FC<LabelProps> = ({ text }) => {
  return <h3 className={styles.label}>{text}</h3>;
};
