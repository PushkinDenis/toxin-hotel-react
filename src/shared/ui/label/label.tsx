import { FC } from "react";
import styles from "./label.module.scss";
import clsx from "clsx";

type LabelProps = {
  text?: string;
};

export const Label: FC<LabelProps> = ({ text }) => {
  return <h3 className={clsx(styles.label)}>{text}</h3>;
};
