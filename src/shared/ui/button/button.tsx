import * as React from "react";
import { Button as ButtonMui, StyledEngineProvider } from "@mui/material";
import { Like, LikeActive } from "@shared";
import styles from "./button.module.scss";
import clsx from "clsx";
import { ArrowForward } from "@mui/icons-material";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: string;
  text: string;
  isClicked?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ variant, text, onClick, isClicked }) => {
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
        <div className={isClicked ? clsx(styles.outline_wrapper, styles.outline) : clsx(styles.outline_wrapper)}>
          <ButtonMui variant="outlined" className={styles.outlined}>
            {text}
          </ButtonMui>
        </div>
      )}
      {variant === "contained" && (
        <ButtonMui variant="contained" className={styles.contained}>
          {text}
        </ButtonMui>
      )}
      {variant === "wide" && (
        <ButtonMui variant="contained" className={styles.wide} endIcon={<ArrowForward className={styles["icon-arrow"]} />}>
          {text}
        </ButtonMui>
      )}
      {variant === "like" && (
        <ButtonMui variant="outlined" className={click || isClicked ? clsx(styles.like, styles.like_active) : styles.like} onClick={handleClick}>
          {click || isClicked ? <LikeActive className={styles.icon} /> : <Like className={styles.icon} />}
          {click ? `${+text + 1}` : text}
        </ButtonMui>
      )}
    </StyledEngineProvider>
  );
};
