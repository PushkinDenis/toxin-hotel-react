import { FC } from "react";
import { LayoutUiKit, ElementLayout } from "@pages";
import { Dropdown, TextField, DatePickerDropdown, Checkbox, Radio, Switch, Rating, Button, Slider, Pagination, CheckboxList, BulletList, Feature, Label } from "@shared";
import { Review } from "@widgets";
import styles from "./form-elements.module.scss";

export const FormElements: FC = () => {
  return (
    <LayoutUiKit type="form-elements">
      <div className={styles.wrapper}>
        <div className={styles.columns_wrapper}>
          <div className={styles.first_col}>
            <ElementLayout label={"Text Field"} state={"Default"}>
              <TextField placeholder={"Email"} />
            </ElementLayout>
            <ElementLayout label={"Text Field"} state={"Hover / Focus"}>
              <TextField placeholder={"Email"} value={"This is pretty awesome"} isActive={true} />
            </ElementLayout>
            <ElementLayout label={"Dropdown"}>
              <Dropdown items={["ВЗРОСЛЫЕ", "ДЕТИ", "МЛАДЕНЦЫ"]} />
            </ElementLayout>
            <ElementLayout label={"masked text field"}>
              <TextField placeholder={"ДД.ММ.ГГГГ"} />
            </ElementLayout>
            <DatePickerDropdown type={"date"} label_first="date dropdown" label_second="date dropdown" />
            <ElementLayout label={"filter date dropdown"}>
              <DatePickerDropdown type={"date-wide"} />
            </ElementLayout>
            <ElementLayout label={"subscription text field"}>
              <TextField type={"subscription"} placeholder={"Email"} />
            </ElementLayout>
          </div>

          <div className={styles.second_col}>
            <ElementLayout label={"Checkbox Buttons"} type="second_col">
              <Checkbox label="Можно курить" />
              <Checkbox label="Можно с питомцами" isChecked={true} />
              <Checkbox label="Можно пригласить гостей (до 10 человек)" isChecked={true} />
            </ElementLayout>
            <ElementLayout label={"Radio Buttons"} type="second_col">
              <div className={styles.inline_wrapper}>
                <Radio label="Мужчина" isChecked={true} />
                <Radio label="Женщина" />
              </div>
            </ElementLayout>
            <ElementLayout label={"Toggle"} type="second_col">
              <Switch label="Получать спецпредложения" isChecked={true} />
              <Switch label="Получать спецпредложения" />
            </ElementLayout>
            <ElementLayout label={"like button"} type="second_col">
              <div className={styles.inline_wrapper}>
                <Button variant="like" text="2" />
                <Button variant="like" text="12" />
              </div>
            </ElementLayout>
            <ElementLayout label={"rate button"} type="second_col">
              <div className={styles.inline_wrapper}>
                <Rating defaultValue={4} />
                <Rating defaultValue={5} />
              </div>
            </ElementLayout>
          </div>
          <div className={styles.third_col}>
            <Slider label={"RANGE SLIDER"} />
            <div className={styles.buttons}>
              <Label text={"buttons"} />
              <div className={styles.buttons_wrapper}>
                <Button variant="contained" text="CLICK ME" />
                <Button variant="contained" text="CLICK ME" />
                <Button variant="outlined" text="CLICK ME" />
                <Button variant="outlined" text="CLICK ME" />
                <div className={styles.button_text_wrapper}>
                  <Button variant={"text"} text={"CLICK ME"} />
                  <Button variant={"text"} text={"CLICK ME"} />
                </div>
              </div>
              <Button variant={"wide"} text={"перейти к оплате"} />
            </div>
            <ElementLayout label={"pagination"}>
              <Pagination text={"1 – 12 из 100+ вариантов аренды"} />
            </ElementLayout>
          </div>
        </div>
        <div className={styles.last_row}>
          <div className={styles.dropdown_wrapper}>
            <ElementLayout label={"dropdown"} state="Default" type="small">
              <Dropdown items={["СПАЛЬНИ", "КРОВАТИ", "ВАННЫЕ КОМНАТЫ"]} />
            </ElementLayout>
            <ElementLayout label={"dropdown"} state="expanded" type="small">
              <Dropdown items={["СПАЛЬНИ", "КРОВАТИ", "ВАННЫЕ КОМНАТЫ"]} isActive={true} values={[2, 2, 0]} />
            </ElementLayout>
          </div>
          <ElementLayout label={"Dropdown"}>
            <Dropdown items={["ВЗРОСЛЫЕ", "ДЕТИ", "МЛАДЕНЦЫ"]} isActive={true} />
          </ElementLayout>
          <ElementLayout label={"Dropdown"}>
            <Dropdown items={["ВЗРОСЛЫЕ", "ДЕТИ", "МЛАДЕНЦЫ"]} isActive={true} values={[2, 1, 0]} />
          </ElementLayout>
          <CheckboxList labelText={"expandable checkbox list"} text={["Завтрак", "Письменный стол", "Стул для кормления", "Кроватка", "Телевизор", "Шампунь"]} />
          <CheckboxList labelText={"expandable checkbox list"} text={["Завтрак", "Письменный стол", "Стул для кормления", "Кроватка", "Телевизор", "Шампунь"]} isActive={true} activeCheckboxes={[true, false, true, false, false, false]} />
          <ElementLayout label={"Rich Checkbox Buttons"}>
            <Checkbox label="Помощник для инвалидов" type="rich" description="На 1 этаже вас встретит специалист и проводит до номера." />
            <Checkbox label="Помощник для инвалидов" type="rich" description="На 1 этаже вас встретит специалист и проводит до номера." />
          </ElementLayout>
          <ElementLayout label={"bullet list"}>
            <BulletList text={["Нельзя с питомцами", "Без вечеринок и мероприятий", "Время прибытия — после 13:00, а выезд до 12:00"]} />
          </ElementLayout>
          <div className={styles.features_wrapper}>
            <Feature img={"./icons/insert_emoticon.svg"} text={"Комфорт"} description={"Шумопоглощающие стены"} />
            <Feature img={"./icons/location_city.svg"} text={"Удобство"} description={"Окно в каждой из спален"} />
          </div>
          <Review
            review={"Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей."}
            img={"./pictures/user_1.png"}
            textLikeButton={"12"}
            userName={"Мурад Сарафанов"}
            userLastLogin={"5 дней назад"}
          />
        </div>
      </div>
    </LayoutUiKit>
  );
};
