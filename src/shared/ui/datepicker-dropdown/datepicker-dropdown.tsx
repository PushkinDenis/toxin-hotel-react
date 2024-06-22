import { FC, useState } from "react";
import { RangeDatePicker, TextField, parseDate, parseDateRu, Label } from "@shared";
import styles from "./datepicker-dropdown.module.scss";
import clsx from "clsx";

type DatePickerDropdownProps = {
  type?: string;
  label_first?: string;
  label_second?: string;
  defaultFirstValue?: string;
  defaultSecondValue?: string;
  isOpen?: boolean;
  defaultDate?: Date;
  defaultValue?: [Date | null, Date | null];
};

export const DatePickerDropdown: FC<DatePickerDropdownProps> = ({ defaultDate, defaultValue, isOpen, type, label_first, label_second, defaultFirstValue, defaultSecondValue }) => {
  const [open, setOpen] = useState<boolean>(!isOpen && !defaultDate ? false : true);
  const [value, setValue] = useState<[Date | null, Date | null]>(defaultValue ? defaultValue : [null, null]);

  const handleValueChange = (newValue: [Date | null, Date | null]) => {
    setValue(newValue);
  };
  const handleOpen = (open: boolean) => {
    setOpen(open);
  };

  const handleFirstValue = () => {
    if (value && value[0]) {
      return parseDate(`${value[0]}`);
    } else if (defaultFirstValue) {
      return defaultFirstValue;
    } else {
      return "";
    }
  };

  const handleSecondValue = () => {
    if (value && value[1]) {
      return parseDate(`${value[1]}`);
    } else if (defaultSecondValue) {
      return defaultSecondValue;
    } else {
      return "";
    }
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
              <TextField onClick={handleOpen} type={"date"} placeholder={"ДД.ММ.ГГГГ"} value={handleFirstValue()} />
              <TextField onClick={handleOpen} type={"date"} placeholder={"ДД.ММ.ГГГГ"} value={handleSecondValue()} />
            </div>
          </>
        )}
        {type === "date-wide" && (
          <>
            <TextField onClick={handleOpen} type={"date-wide"} placeholder={"ДД.ММ.ГГГГ"} value={value && value[0] ? `${parseDateRu(`${value[0]}`)} - ${parseDateRu(`${value[1]}`)}` : ""} />
          </>
        )}
        {open ? <RangeDatePicker val={value} onChange={handleValueChange} handleClose={setOpen} handleVal={setValue} defaulDate={defaultDate} defaultValue={defaultValue} /> : false}
      </div>
    </>
  );
};
