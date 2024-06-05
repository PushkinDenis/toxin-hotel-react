import { FC, useState } from "react";
import { RangeDatePicker, TextField } from "@shared";
import styles from "./datepicker-dropdown.module.scss";

export const DatePickerDropdown: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (open: boolean) => {
    setOpen(open);
  };

  return (
    <>
      <div className={styles["inputs-wrapper"]}>
        <TextField onClick={handleOpen} type={"date"} />
        <TextField onClick={handleOpen} type={"date"} />
      </div>
      {open ? <RangeDatePicker /> : false}
    </>
  );
};
