import { FC, useState } from "react";
import { RangeDatePicker, TextField } from "@shared";
import styles from "./datepicker-dropdown.module.scss";

export const DatePickerDropdown: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  const handleValueChange = (newValue: [Date | null, Date | null]) => {
    setValue(newValue);
  };
  const handleOpen = (open: boolean) => {
    setOpen(open);
  };

  return (
    <>
      <div className={styles["inputs-wrapper"]}>
        <TextField onClick={handleOpen} type={"date"} placeholder={"Дата"} value={value[0] ? `${value[0]}` : ""} />
        <TextField onClick={handleOpen} type={"date"} placeholder={"Дата"} value={value[1] ? `${value[1]}` : ""} />
      </div>
      {open ? <RangeDatePicker val={value} onChange={handleValueChange} /> : false}
    </>
  );
};
