import { FC } from "react";
import { clsx } from "clsx";
import styles from "./layout-ui-kit.module.scss";

export const LayoutUiKit: FC<any> = ({ children }) => {
  return (
    <>
      <div className={clsx(styles.wrapper)}>
        <img src="./public/icons/ui-kit-icon.svg" alt="icon" />
        <main>{children}</main>
      </div>
    </>
  );
};
