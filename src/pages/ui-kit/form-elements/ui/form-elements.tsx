import { FC } from "react";
import { LayoutUiKit, ElementLayout } from "@pages";
import { Dropdown, TextField, DatePickerDropdown, Checkbox, Radio, Switch, Rating, Button, Slider, Pagination, CheckboxList, BulletList, Feature } from "@shared";
import { Review } from "@widgets";
import styles from "./form-elements.module.scss";

export const FormElements: FC = () => {
  return (
    <LayoutUiKit>
      <div className={styles.wrapper}>
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
          <ElementLayout label={"dropdown"} state="Default" type="small">
            <Dropdown items={["СПАЛЬНИ", "КРОВАТИ", "ВАННЫЕ КОМНАТЫ"]} />
          </ElementLayout>
          <ElementLayout label={"dropdown"} state="expanded" type="small">
            <Dropdown items={["СПАЛЬНИ", "КРОВАТИ", "ВАННЫЕ КОМНАТЫ"]} isActive={true} values={[3, 2, 6]} />
          </ElementLayout>
          <CheckboxList labelText={"expandable checkbox list"} text={["Завтрак", "Письменный стол", "Стул для кормления", "Кроватка", "Телевизор", "Шампунь"]} />
          <CheckboxList labelText={"expandable checkbox list"} text={["Завтрак", "Письменный стол", "Стул для кормления", "Кроватка", "Телевизор", "Шампунь"]} isActive={true} activeCheckboxes={[true, false, true, false, false, false]} />
          <div className={styles.features_wrapper}>
            <Feature img={"./icons/insert_emoticon.svg"} text={"Комфорт"} description={"Шумопоглощающие стены"} />
            <Feature img={"./icons/location_city.svg"} text={"Удобство"} description={"Окно в каждой из спален"} />
          </div>
        </div>

        <div className={styles.second_col}>
          <ElementLayout label={"Checkbox Buttons"} type="second_col">
            <Checkbox label="Можно курить" />
            <Checkbox label="Можно с питомцами" />
            <Checkbox label="Можно пригласить гостей (до 10 человек)" />
          </ElementLayout>
        </div>

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

        <BulletList text={["Нельзя с питомцами", "Без вечеринок и мероприятий", "Время прибытия — после 13:00, а выезд до 12:00"]} />
        <Feature img={"./icons/insert_emoticon.svg"} text={"Комфорт"} description={"Шумопоглощающие стены"} />
        <Feature img={"./icons/location_city.svg"} text={"Удобство"} description={"Окно в каждой из спален"} />
        <Review
          review={"Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей."}
          img={"./pictures/user_1.png"}
          textLikeButton={"12"}
          userName={"Мурад Сарафанов"}
          userLastLogin={"5 дней назад"}
        />
        <Review review={"Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент"} img={"./pictures/user_2.png"} textLikeButton={"2"} userName={"Патрисия Стёклышкова "} userLastLogin={"Неделю назад"} />
      </div>
    </LayoutUiKit>
  );
};
