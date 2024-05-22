import React, { FC } from "react";
import { clsx } from "clsx";
import styles from "./layout-ui-kit.module.scss";

type LayoutUiKitProps = {
  children?: React.ReactNode;
};

export const LayoutUiKit: FC<LayoutUiKitProps> = ({ children }) => {
  return (
    <>
      <div className={clsx(styles.wrapper)}>
        <img src="./public/icons/ui-kit-icon.svg" alt="icon" />
        <main>{children}</main>
      </div>
    </>
  );
};
