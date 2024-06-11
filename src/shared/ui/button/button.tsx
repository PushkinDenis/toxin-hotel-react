import * as React from "react";
import { Button as ButtonMui, StyledEngineProvider } from "@mui/material";
import { Like, LikeActive } from "@shared";
import styles from "./button.module.scss";
import clsx from "clsx";

type ButtonProps = {
  onClick?: () => void;
  variant: string;
  text: string;
};

export const Button: React.FC<ButtonProps> = ({ variant, text, onClick }) => {
  const [click, setClick] = React.useState<boolean>(false);
  const handleClick = () => {
    click ? setClick(false) : setClick(true);
  };
  return (
    <StyledEngineProvider injectFirst>
      {variant === "text" && (
        <ButtonMui variant="text" className={styles.text} onClick={onClick}>
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
      {variant === "like" && (
        <ButtonMui variant="outlined" className={click ? clsx(styles.like, styles.like_active) : styles.like} onClick={handleClick}>
          {click ? <LikeActive className={styles.icon} /> : <Like className={styles.icon} />}
          {text}
        </ButtonMui>
      )}
    </StyledEngineProvider>
  );
};
