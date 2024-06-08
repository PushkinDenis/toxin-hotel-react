import { FC, useState } from "react";
import { RangeDatePicker, TextField, parseDate, parseDateRu } from "@shared";
import styles from "./datepicker-dropdown.module.scss";

type DatePickerDropdownProps = {
  type?: string;
};

export const DatePickerDropdown: FC<DatePickerDropdownProps> = ({ type }) => {
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
      <div className={styles.wrapper}>
        <div className={styles["inputs-wrapper"]}>
          {type === "date" && (
            <>
              <TextField onClick={handleOpen} type={"date"} placeholder={"ДД.ММ.ГГГГ"} value={value && value[0] ? parseDate(`${value[0]}`) : ""} />
              <TextField onClick={handleOpen} type={"date"} placeholder={"ДД.ММ.ГГГГ"} value={value && value[1] ? parseDate(`${value[1]}`) : ""} />
            </>
          )}
          {type === "date-wide" && (
            <>
              <TextField onClick={handleOpen} type={"date-wide"} placeholder={"ДД.ММ.ГГГГ"} value={value && value[0] ? `${parseDateRu(`${value[0]}`)} - ${parseDateRu(`${value[1]}`)}` : ""} />
            </>
          )}
        </div>
        {open ? <RangeDatePicker val={value} onChange={handleValueChange} handleClose={setOpen} handleVal={setValue} /> : false}
      </div>
    </>
  );
};
