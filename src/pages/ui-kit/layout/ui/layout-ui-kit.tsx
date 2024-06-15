import React, { FC } from "react";
import { clsx } from "clsx";
import styles from "./layout-ui-kit.module.scss";

type LayoutUiKitProps = {
  children?: React.ReactNode;
  type?: string;
};

export const LayoutUiKit: FC<LayoutUiKitProps> = ({ children, type }) => {
  return (
    <>
      <div className={type === "form-elements" ? clsx(styles.wrapper, styles.wrapper_form_elements) : clsx(styles.wrapper)}>
        <img src="./icons/ui-kit-icon.svg" alt="icon" />
        <main>{children}</main>
      </div>
    </>
  );
};
