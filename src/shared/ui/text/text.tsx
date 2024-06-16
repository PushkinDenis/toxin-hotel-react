import { FC } from "react";
import styles from "./text.module.scss";
import clsx from "clsx";

type TextProps = {
  text?: string;
  type?: "black";
};

export const Text: FC<TextProps> = ({ text, type }) => {
  return <p className={type === "black" ? clsx(styles.text_black) : clsx(styles.text)}>{text}</p>;
};
