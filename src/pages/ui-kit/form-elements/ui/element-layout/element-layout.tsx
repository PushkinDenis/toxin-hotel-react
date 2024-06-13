import { FC, ReactNode } from "react";
import { Label, StateDescription } from "@shared";
import styles from "./element-layout.module.scss";
import { clsx } from "clsx";

type ElementLayoutProps = {
  children: ReactNode;
  label?: string;
  state?: string;
  className?: string;
};

export const ElementLayout: FC<ElementLayoutProps> = ({ children, label, state, className }) => {
  return (
    <div className={clsx(styles.element_wrapper, { className })}>
      <div className={styles.label_wrapper}>
        <Label text={label} />
        <StateDescription text={state} />
      </div>
      {children}
    </div>
  );
};
