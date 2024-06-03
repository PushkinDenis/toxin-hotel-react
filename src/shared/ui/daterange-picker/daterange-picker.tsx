import { DatePicker } from "@mantine/dates";
import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

export const Demo = () => {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <MantineProvider withCssVariables withGlobalClasses withStaticClasses>
      <DatePicker type="range" value={value} onChange={setValue} />{" "}
    </MantineProvider>
  );
};
