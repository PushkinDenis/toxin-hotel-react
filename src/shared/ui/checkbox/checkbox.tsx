import { FC } from "react";
import styles from "./checkbox.module.scss";
import { Checkbox as CheckboxMui, StyledEngineProvider } from "@mui/material";
import { CheckboxDefault, CheckboxChecked } from "@shared";

export const Checkbox: FC = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CheckboxMui className={styles.checkbox} icon={<CheckboxDefault />} checkedIcon={<CheckboxChecked />} />
      </StyledEngineProvider>
    </>
  );
};
