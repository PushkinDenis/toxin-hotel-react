import React, { FC } from "react";
import { clsx } from "clsx";
import styles from "./layout.module.scss";
import { UiKitHeader } from "@/widgets";

type LayoutUiKitProps = {
  children?: React.ReactNode;
};

export const HeadersAndFootersLayout: FC<LayoutUiKitProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.layout)}>
        <UiKitHeader type="grey" />
        <main>{children}</main>
      </div>
    </div>
  );
};
