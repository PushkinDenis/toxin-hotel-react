import * as React from "react";
import { Button as ButtonMui, StyledEngineProvider } from "@mui/material";
import styles from "./button.module.scss";

type ButtonProps = {
  onClick?: () => void;
  variant: string;
};

export const Button: React.FC<ButtonProps> = ({ variant }) => {
  return (
    <StyledEngineProvider injectFirst>
      {variant === "text" && (
        <ButtonMui variant="text" className={styles.text}>
          Text
        </ButtonMui>
      )}
      ;
      {variant === "outlined" && (
        <ButtonMui variant="outlined" className={styles.outlined}>
          Text
        </ButtonMui>
      )}
      ;
      {variant === "contained" && (
        <ButtonMui variant="contained" className={styles.contained}>
          Text
        </ButtonMui>
      )}
      ;
    </StyledEngineProvider>
  );
};
