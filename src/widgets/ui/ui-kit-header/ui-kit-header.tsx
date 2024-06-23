import { FC } from "react";
import styles from "./ui-kit-header.module.scss";
import clsx from "clsx";

type UiKitHeaderProps = {
  type?: "grey";
};

export const UiKitHeader: FC<UiKitHeaderProps> = ({ type }) => {
  return (
    <header className={type === "grey" ? clsx(styles.header, styles.header_grey) : styles.header}>
      <img src="./icons/ui-kit-icon.svg" alt="icon" />
    </header>
  );
};
