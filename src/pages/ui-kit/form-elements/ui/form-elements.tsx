import { FC } from "react";
import { LayoutUiKit } from "@pages";
import { Dropdown, TextField, DatePickerDropdown, Checkbox, Radio, Switch, Rating, Button, Slider, Pagination } from "@shared";
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
        <Checkbox label="Можно курить" />
        <Checkbox label="Помощник для инвалидов" type="rich" description="На 1 этаже вас встретит специалист и проводит до номера." />
        <Radio label="Мужчины" />
        <Switch label="Собаки" />
        <Rating />
        <Button variant="like" text="1" />
        <Button variant="like" text="12" />
        <Button variant="outlined" text="12" />
        <Button variant="contained" text="12" />
        <Button variant={"text"} text={"dvs"} />
        <Button variant={"wide"} text={"перейти к оплате"} />
        <Slider label={"RANGE SLIDER"} />
        <Pagination />
      </div>
    </LayoutUiKit>
  );
};
