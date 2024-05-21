import { FC } from "react";
import { clsx } from "clsx";
import styles from "./color-box.module.scss";

type ColorBoxProps = {
  backgroundColor: string;
};

export const ColorBox: FC<ColorBoxProps> = ({ backgroundColor }) => {
  console.log(styles);
  return <div className={clsx(styles.colorbox)} style={{ backgroundColor: backgroundColor }}></div>;
};
