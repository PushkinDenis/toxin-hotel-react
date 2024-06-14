import { FC, ReactNode } from "react";
import { Label, StateDescription } from "@shared";
import styles from "./element-layout.module.scss";
import { clsx } from "clsx";

type ElementLayoutProps = {
  children: ReactNode;
  label?: string;
  state?: string;
  className?: string;
  type?: string;
};

export const ElementLayout: FC<ElementLayoutProps> = ({ children, label, state, type }) => {
  return (
    <div className={type === "small" ? clsx(styles.element_wrapper, styles.element_wrapper_small) : styles.element_wrapper}>
      <div className={styles.label_wrapper}>
        <Label text={label} />
        <StateDescription text={state} />
      </div>
      {children}
    </div>
  );
};
