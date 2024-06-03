import { DatePicker, DatePickerBaseProps, DatesProvider } from "@mantine/dates";
import { FC, useState } from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "dayjs/locale/ru";
import styles from "./daterange-picker.module.scss";

interface CustomDatePickerProps extends DatePickerBaseProps {
  classNames?: {
    wrapper?: string;
    calendarHeader?: string;
    calendarHeaderLevel?: string;
    day?: string;
    daySelected?: string;
    tbody?: string;
  };
}

export const Demo: FC<CustomDatePickerProps> = (props) => {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <MantineProvider>
      <DatesProvider settings={{ locale: "ru" }}>
        <DatePicker
          type="range"
          value={value}
          onChange={setValue}
          classNames={{
            wrapper: styles.mantineDatePickerWrapper,
            calendarHeader: styles.mantineDatePickerCalendarHeader,
            calendarHeaderLevel: styles.mantineDatePickerCalendarHeaderLevel,
            day: styles.mantineDatePickerDay,
            daySelected: styles.mantineDatePickerDaySelected,
            tbody: styles["mantine-DatePicker-month"],
          }}
          {...props}
        />
      </DatesProvider>
    </MantineProvider>
  );
};