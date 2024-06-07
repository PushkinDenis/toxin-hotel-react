import { DatePicker, DatesProvider } from "@mantine/dates";
import { FC, useState } from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "dayjs/locale/ru";
import styles from "./daterange-picker.module.scss";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button } from "@shared";

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
  val: [Date | null, Date | null];
  onClick: () => void;
  onChange?: (value: [Date | null, Date | null]) => void;
}

export const RangeDatePicker: FC<CustomDatePickerProps> = (props) => {
  const { val, onChange, onClick } = props;
  const [setOpen] = useState<boolean>(false);

  const handleValue = (newValue: [Date | null, Date | null]) => {
    onChange!(newValue);
  };

  return (
    <MantineProvider>
      <div className={styles.wrapper}>
        <DatesProvider settings={{ locale: "ru" }}>
          <DatePicker
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
            <Button variant="text" text="ОЧИСТИТЬ" onClick={() => {}} />
            <Button
              variant="text"
              text="ПРИМЕНИТЬ"
              onClick={() => {
                setOpen;
                onClick();
              }}
            />
          </div>
        </DatesProvider>
      </div>
    </MantineProvider>
  );
};
