import { FC } from "react";
import { LayoutUiKit } from "@pages";
import { Dropdown, TextField, Demo } from "@shared";
import styles from "./form-elements.module.scss";

export const FormElements: FC = () => {
  return (
    <LayoutUiKit>
      <div className={styles.wrapper}>
        <TextField placeholder={"Email"} />
        <TextField placeholder={"Email"} />
        <Dropdown items={["ВЗРОСЛЫЕ", "ДЕТИ", "МЛАДЕНЦЫ"]} />
        <Dropdown items={["СПАЛЬНИ", "КРОВАТИ", "ВАННЫЕ КОМНАТЫ"]} />
        <Demo />
      </div>
    </LayoutUiKit>
  );
};
