import React, { FC } from "react";
import { clsx } from "clsx";
import styles from "./layout.module.scss";

type LayoutUiKitProps = {
  children?: React.ReactNode;
};

export const HeadersAndFootersLayout: FC<LayoutUiKitProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.layout)}>
        <img src="./icons/ui-kit-icon.svg" alt="icon" />
        <main>{children}</main>
      </div>
    </div>
  );
};
