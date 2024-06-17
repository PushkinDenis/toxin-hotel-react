import { FC } from "react";
import styles from "./text.module.scss";
import clsx from "clsx";

type TextProps = {
  text?: string;
  type?: "black" | "purple" | "grey";
};

export const Text: FC<TextProps> = ({ text, type }) => {
  const handleText = () => {
    if (type === "black") {
      return clsx(styles.text_black);
    } else if (type === "purple") {
      return clsx(styles.text_purple);
    } else if (type === "grey") {
      return clsx(styles.text_grey);
    }
  };

  return <p className={handleText()}>{text}</p>;
};
