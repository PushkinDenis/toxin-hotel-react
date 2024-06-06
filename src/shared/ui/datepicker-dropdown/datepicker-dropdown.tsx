import { FC, useState } from "react";
import { RangeDatePicker, TextField, parseDate } from "@shared";
import styles from "./datepicker-dropdown.module.scss";

export const DatePickerDropdown: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  const handleValueChange = (newValue: [Date | null, Date | null]) => {
    setValue(newValue);
    console.log(parseDate(`${value[0]}`));
  };
  const handleOpen = (open: boolean) => {
    setOpen(open);
  };

  return (
    <>
      <div className={styles["inputs-wrapper"]}>
        <TextField onClick={handleOpen} type={"date"} placeholder={"ДД.ММ.ГГГГ"} value={value[0] ? parseDate(`${value[0]}`) : ""} />
        <TextField onClick={handleOpen} type={"date"} placeholder={"ДД.ММ.ГГГГ"} value={value[1] ? parseDate(`${value[1]}`) : ""} />
      </div>
      {open ? <RangeDatePicker val={value} onChange={handleValueChange} /> : false}
    </>
  );
};
