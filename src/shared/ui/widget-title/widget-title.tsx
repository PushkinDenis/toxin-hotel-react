import { FC } from "react";
import styles from "./widget-title.module.scss";
import clsx from "clsx";

type WidgetTitleProps = {
  text?: string;
};

export const WidgetTitle: FC<WidgetTitleProps> = ({ text }) => {
  return <h1 className={clsx(styles.title)}>{text}</h1>;
};
