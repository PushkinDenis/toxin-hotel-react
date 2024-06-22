import { FC } from "react";
import styles from "./find-room-card.module.scss";
import { DatePickerDropdown, WidgetTitle, LabelTemplate, Button, Dropdown } from "@shared";

type FindRoomCardProps = {
  isDatepickerActive?: boolean;
  defaultDate?: Date;
  defaultValue?: [Date | null, Date | null];
};

export const FindRoomCard: FC<FindRoomCardProps> = ({ isDatepickerActive, defaultDate, defaultValue }) => {
  return (
    <div className={styles.wrapper}>
      <WidgetTitle text={"Найдём номера под ваши пожелания"} />
      <DatePickerDropdown label_first={"прибытие"} label_second={"выезд"} type={"date"} isOpen={isDatepickerActive} defaultDate={defaultDate} defaultValue={defaultValue} />
      <LabelTemplate label={"гости"}>
        <Dropdown items={["ВЗРОСЛЫЕ", "ДЕТИ", "МЛАДЕНЦЫ"]} />
      </LabelTemplate>
      <Button variant={"wide"} text={"подобрать номер"} />
    </div>
  );
};
