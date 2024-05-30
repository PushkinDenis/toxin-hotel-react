import * as React from "react";
import { Button as ButtonMui, StyledEngineProvider } from "@mui/material";
import styles from "./button.module.scss";

type ButtonProps = {
  onClick?: () => void;
  variant: string;
  text: string;
};

export const Button: React.FC<ButtonProps> = ({ variant, text }) => {
  return (
    <StyledEngineProvider injectFirst>
      {variant === "text" && (
        <ButtonMui variant="text" className={styles.text}>
          {text}
        </ButtonMui>
      )}
      {variant === "outlined" && (
        <ButtonMui variant="outlined" className={styles.outlined}>
          {text}
        </ButtonMui>
      )}
      {variant === "contained" && (
        <ButtonMui variant="contained" className={styles.contained}>
          {text}
        </ButtonMui>
      )}
    </StyledEngineProvider>
  );
};
