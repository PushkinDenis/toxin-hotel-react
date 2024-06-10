import { FC } from "react";
import styles from "./checkbox.module.scss";
import { Checkbox as CheckboxMui, StyledEngineProvider, FormControlLabel } from "@mui/material";
import { CheckboxDefault, CheckboxChecked } from "@shared";

export const Checkbox: FC = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <FormControlLabel className={styles.form} control={<CheckboxMui className={styles.checkbox} icon={<CheckboxDefault />} checkedIcon={<CheckboxChecked />} />} label="Label" />
      </StyledEngineProvider>
    </>
  );
};
