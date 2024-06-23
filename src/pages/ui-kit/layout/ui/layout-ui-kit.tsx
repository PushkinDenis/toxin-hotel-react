import React, { FC } from "react";
import { clsx } from "clsx";
import styles from "./layout-ui-kit.module.scss";
import { UiKitHeader } from "@widgets";

type LayoutUiKitProps = {
  children?: React.ReactNode;
  type?: string;
};

export const LayoutUiKit: FC<LayoutUiKitProps> = ({ children, type }) => {
  return (
    <>
      <div className={type === "form-elements" ? clsx(styles.wrapper, styles.wrapper_form_elements) : clsx(styles.wrapper)}>
        <UiKitHeader />
        <main>{children}</main>
      </div>
    </>
  );
};
