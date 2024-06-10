import { FC } from "react";
import styles from "./radio.module.scss";
import { Radio as RadioMui, StyledEngineProvider, FormControlLabel } from "@mui/material";

type RadioProps = {
  label?: string;
};

export const Radio: FC<RadioProps> = ({ label }) => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <FormControlLabel value="female" control={<RadioMui />} label="Female" />
      </StyledEngineProvider>
    </>
  );
};
