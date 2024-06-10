import { FC } from "react";
import styles from "./switch.module.scss";
import { Switch as SwitchMui, StyledEngineProvider, FormControlLabel, SwitchClasses as classes } from "@mui/material";

type SwitchProps = {
  label?: string;
};

export const Switch: FC<SwitchProps> = ({ label }) => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <FormControlLabel className={styles.label} control={<SwitchMui className={styles.switch} />} label={label} />
      </StyledEngineProvider>
    </>
  );
};
