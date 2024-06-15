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
  const handleClass = () => {
    if (type === "small") {
      return clsx(styles.element_wrapper, styles.element_wrapper_small);
    } else if (type === "second_col") {
      return clsx(styles.element_wrapper_second_col);
    } else {
      return styles.element_wrapper;
    }
  };

  return (
    <div className={handleClass()}>
      <div className={styles.label_wrapper}>
        <Label text={label} />
        <StateDescription text={state} />
      </div>
      {children}
    </div>
  );
};
