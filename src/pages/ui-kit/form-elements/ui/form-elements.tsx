import { FC } from "react";
import { LayoutUiKit } from "@pages";
import { Dropdown, TextField, DatePickerDropdown, Checkbox, Radio, Switch, Rating, Button, Slider, Pagination, Label, CheckboxList, BulletList, Feature } from "@shared";
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
        <Pagination text={"1 – 12 из 100+ вариантов аренды"} />
        <CheckboxList labelText={"expandable checkbox list"} text={["Завтрак", "Письменный стол", "Стул для кормления", "Кроватка", "Телевизор", "Шампунь"]} />
        <Label text={"Label"} />
        <BulletList text={["Нельзя с питомцами", "Без вечеринок и мероприятий", "Время прибытия — после 13:00, а выезд до 12:00"]} />
        <Feature img={"./icons/insert_emoticon.svg"} text={"Комфорт"} description={"Шумопоглощающие стены"} />
        <Feature img={"./icons/location_city.svg"} text={"Удобство"} description={"Окно в каждой из спален"} />
      </div>
    </LayoutUiKit>
  );
};
