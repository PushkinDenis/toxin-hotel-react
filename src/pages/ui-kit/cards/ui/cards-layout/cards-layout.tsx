import React, { FC } from "react";
import { clsx } from "clsx";
import styles from "./cards-layout.module.scss";

type LayoutUiKitProps = {
  children?: React.ReactNode;
};

export const CardsLayout: FC<LayoutUiKitProps> = ({ children }) => {
  return (
    <>
      <div className={clsx(styles.wrapper)}>
        <img src="./icons/ui-kit-icon.svg" alt="icon" />
        <main>{children}</main>
      </div>
    </>
  );
};
