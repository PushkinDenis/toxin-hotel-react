import { FC } from "react";
import styles from "./search-room.module.scss";
import { ElementLayout, Layout } from "@pages";
import clsx from "clsx";
import { Checkbox, CheckboxList, DatePickerDropdown, Dropdown, LabelTemplate, Slider } from "@shared";

type SearchRoomProps = {
  isDatePickerActive?: boolean;
  defaultDate?: Date;
  defaultValue?: [Date | null, Date | null];
  isDropdownActive?: boolean;
  dropdownValues?: number[];
};

export const SearchRoom: FC<SearchRoomProps> = ({ isDropdownActive, dropdownValues, isDatePickerActive, defaultDate, defaultValue }) => {
  return (
    <Layout>
      <main className={!defaultValue ? styles.main : clsx(styles.main, styles.main_datepicker_active)}>
        <div className={styles.filters}>
          <LabelTemplate label={"даты пребывания в отеле"}>
            <DatePickerDropdown type={"date-wide"} />
          </LabelTemplate>
          <LabelTemplate label={"гости"}>
            <Dropdown items={["ВЗРОСЛЫЕ", "ДЕТИ", "МЛАДЕНЦЫ"]} values={[2, 1, 1]} type={"small"} />
          </LabelTemplate>
          <Slider label={"диапазон цены"} />
          <LabelTemplate label={"правила дома"}>
            <Checkbox label="Можно курить" />
            <Checkbox label="Можно с питомцами" isChecked={true} />
            <Checkbox label="Можно пригласить гостей (до 10 человек)" isChecked={true} />
          </LabelTemplate>
          <LabelTemplate label={"доступность"}>
            <Checkbox label="Помощник для инвалидов" type="rich" description="На 1 этаже вас встретит специалист и проводит до номера." />
            <Checkbox label="Помощник для инвалидов" type="rich" description="На 1 этаже вас встретит специалист и проводит до номера." />
          </LabelTemplate>
          <LabelTemplate label={"доступность"}>
            <Dropdown items={["СПАЛЬНИ", "КРОВАТИ", "ВАННЫЕ КОМНАТЫ"]} values={[2, 2, 0]} />
          </LabelTemplate>
          <CheckboxList labelText={"дополнительные удобства"} text={["Завтрак", "Письменный стол", "Стул для кормления", "Кроватка", "Телевизор", "Шампунь"]} />
        </div>
      </main>
    </Layout>
  );
};
