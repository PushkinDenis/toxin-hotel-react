import { DatePicker, DatesProvider } from "@mantine/dates";
import { FC, useState } from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "dayjs/locale/ru";
import styles from "./daterange-picker.module.scss";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button } from "@shared";
import clsx from "clsx";

interface CustomDatePickerProps {
  classNames?: {
    wrapper?: string;
    calendarHeader?: string;
    calendarHeaderLevel?: string;
    day?: string;
    daySelected?: string;
    tbody?: string;
    weekdaysRow?: string;
  };
  val?: [Date | null, Date | null];
  open?: any;
  onChange?: (value: [Date | null, Date | null]) => void;
  handleClose?: (buttonprop: any) => void;
  handleVal?: (buttonprop: any) => void;
  isStatic?: boolean;
  defaulDate?: Date;
}

export const RangeDatePicker: FC<CustomDatePickerProps> = (props) => {
  const { val, onChange, handleClose, handleVal, isStatic, defaulDate } = props;
  const [_open, setOpen] = useState<boolean>(false);
  const [valu, setValu] = useState([null, null]);
  const handleValue = (newValue: [Date | null, Date | null]) => {
    onChange!(newValue);
  };
  const onFirstButt = () => {
    handleClose!(setOpen(false));
  };
  const onSecButt = () => {
    handleVal!(setValu(valu));
  };

  return (
    <MantineProvider>
      <div className={isStatic ? clsx(styles.wrapper, styles.wrapper_static) : styles.wrapper}>
        <DatesProvider settings={{ locale: "ru" }}>
          <DatePicker
            defaultDate={defaulDate}
            previousIcon={<ArrowBack sx={{ fontSize: "24px", color: "var(--color-purple)" }} />}
            nextIcon={<ArrowForward sx={{ fontSize: "24px", color: "var(--color-purple)" }} />}
            type="range"
            value={val}
            onChange={handleValue}
            classNames={{
              wrapper: styles.mantineDatePickerWrapper,
              calendarHeader: styles.mantineDatePickerCalendarHeader,
              calendarHeaderLevel: styles.mantineDatePickerCalendarHeaderLevel,
              day: styles.mantineDatePickerDay,
              daySelected: styles.mantineDatePickerDaySelected,
              weekdaysRow: styles.mantineDatePickerweekday,
              tbody: styles["mantine-DatePicker-month"],
            }}
            {...props}
          />
          <div className={styles["buttons-wrapper"]}>
            <Button variant="text" text="ОЧИСТИТЬ" onClick={onSecButt} />
            <Button variant="text" text="ПРИМЕНИТЬ" onClick={onFirstButt} />
          </div>
        </DatesProvider>
      </div>
    </MantineProvider>
  );
};
