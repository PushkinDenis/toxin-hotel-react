import { FC, useState } from "react";
import styles from "./radio.module.scss";
import { Radio as RadioMui, RadioGroup, StyledEngineProvider, FormControlLabel } from "@mui/material";
import { RadioChecked, RadioIcon } from "@shared";
import clsx from "clsx";

export const Radio: FC = () => {
  const [radioGroupValue, setRadioGroupValue] = useState("мужчина");

  return (
    <>
      <StyledEngineProvider injectFirst>
        <RadioGroup className={styles.radio} value={radioGroupValue}>
          <FormControlLabel value="мужчина" className={radioGroupValue === "мужчина" ? clsx(styles.form, styles.form_active) : styles.form} onClick={() => setRadioGroupValue("мужчина")} control={<RadioMui icon={<RadioIcon />} checkedIcon={<RadioChecked />} />} label={"Мужчина"} />
          <FormControlLabel value="женщина" className={radioGroupValue === "женщина" ? clsx(styles.form, styles.form_active) : styles.form} onClick={() => setRadioGroupValue("женщина")} control={<RadioMui icon={<RadioIcon />} checkedIcon={<RadioChecked />} />} label={"Женщина"} />
        </RadioGroup>
      </StyledEngineProvider>
    </>
  );
};
