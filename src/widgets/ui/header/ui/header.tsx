import { FC } from "react";
import styles from "./header.module.scss";
import clsx from "clsx";

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_logo_wrapper}>
        <img src="./icons/toxin-logo.svg" alt="logo" className={styles.logo} />
        <img src="./icons/toxin-logo-text.svg" alt="toxin" className={styles.logo} />
      </div>
    </div>
  );
};
