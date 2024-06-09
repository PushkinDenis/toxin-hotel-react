import { FC } from "react";
import { LayoutUiKit } from "@pages";
import { Dropdown, TextField, DatePickerDropdown, Checkbox } from "@shared";
import styles from "./form-elements.module.scss";

export const FormElements: FC = () => {
  return (
    <LayoutUiKit>
      <div className={styles.wrapper}>
        <TextField placeholder={"Email"} />
        <TextField placeholder={"Email"} value={"Email"} isActive={true} />
        <TextField placeholder={"Email"} type={"subscription"} />
        <Dropdown items={["ВЗРОСЛЫЕ", "ДЕТИ", "МЛАДЕНЦЫ"]} />
        <Dropdown items={["СПАЛЬНИ", "КРОВАТИ", "ВАННЫЕ КОМНАТЫ"]} />
        <DatePickerDropdown type={"date"} />
        <DatePickerDropdown type={"date-wide"} />
        <Checkbox />
      </div>
    </LayoutUiKit>
  );
};
