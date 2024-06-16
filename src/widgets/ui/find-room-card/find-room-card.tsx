import { FC } from "react";
import styles from "./find-room-card.module.scss";
import { DatePickerDropdown, WidgetTitle, LabelTemplate, Button, Dropdown } from "@shared";

export const FindRoomCard: FC = () => {
  return (
    <div className={styles.wrapper}>
      <WidgetTitle text={"Найдём номера под ваши пожелания"} />
      <DatePickerDropdown label_first={"прибытие"} label_second={"выезд"} type={"date"} />
      <LabelTemplate label={"гости"}>
        <Dropdown items={["ВЗРОСЛЫЕ", "ДЕТИ", "МЛАДЕНЦЫ"]} />
      </LabelTemplate>
      <Button variant={"wide"} text={"подобрать номер"} />
    </div>
  );
};
