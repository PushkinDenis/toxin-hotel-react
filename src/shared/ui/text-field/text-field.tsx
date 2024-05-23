import { FC } from "react";
import { clsx } from "clsx";
import styles from "./text-field.module.scss";
import { FormControl, OutlinedInput, StyledEngineProvider } from "@mui/material";

export const TextField: FC = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <FormControl className={styles["form-controll"]} sx={{ "& fieldset": { border: "none" } }}>
          <OutlinedInput className={styles.input} placeholder="Please enter text" />
        </FormControl>
      </StyledEngineProvider>
      ,
    </>
  );
};
