import { FC, useState } from "react";
import { RangeDatePicker, TextField, parseDate, parseDateRu, Label } from "@shared";
import styles from "./datepicker-dropdown.module.scss";
import clsx from "clsx";

type DatePickerDropdownProps = {
  type?: string;
  label_first?: string;
  label_second?: string;
};

export const DatePickerDropdown: FC<DatePickerDropdownProps> = ({ type, label_first, label_second }) => {
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
      <div className={type === "date-wide" ? clsx(styles["dropdown-wrapper_wide"]) : styles["dropdown-wrapper"]}>
        {type === "date" && (
          <>
            <div className={styles.label_wrapper}>
              <Label text={label_first} />
              <Label text={label_second} />
            </div>
            <div className={styles.inputs_wrapper}>
              <TextField onClick={handleOpen} type={"date"} placeholder={"ДД.ММ.ГГГГ"} value={value && value[0] ? parseDate(`${value[0]}`) : ""} />
              <TextField onClick={handleOpen} type={"date"} placeholder={"ДД.ММ.ГГГГ"} value={value && value[1] ? parseDate(`${value[1]}`) : ""} />
            </div>
          </>
        )}
        {type === "date-wide" && (
          <>
            <TextField onClick={handleOpen} type={"date-wide"} placeholder={"ДД.ММ.ГГГГ"} value={value && value[0] ? `${parseDateRu(`${value[0]}`)} - ${parseDateRu(`${value[1]}`)}` : ""} />
          </>
        )}
      </div>
      {open ? <RangeDatePicker val={value} onChange={handleValueChange} handleClose={setOpen} handleVal={setValue} /> : false}
    </>
  );
};
