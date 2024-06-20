import { FC } from "react";
import styles from "./switch.module.scss";
import { Switch as SwitchMui, StyledEngineProvider, FormControlLabel } from "@mui/material";

type SwitchProps = {
  label?: string;
  isChecked?: boolean;
};

export const Switch: FC<SwitchProps> = ({ label, isChecked }) => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <FormControlLabel className={styles.label} control={<SwitchMui className={styles.switch} />} label={label} checked={isChecked} />
      </StyledEngineProvider>
    </>
  );
};
