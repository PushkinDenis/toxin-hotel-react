import { FC, ReactNode } from "react";
import { Label } from "@shared";
import styles from "./label-template.module.scss";

type LabelTemplate = {
  children: ReactNode;
  label?: string;
};

export const LabelTemplate: FC<LabelTemplate> = ({ children, label }) => {
  return (
    <div className={styles.wrapper}>
      <Label text={label} />
      {children}
    </div>
  );
};
