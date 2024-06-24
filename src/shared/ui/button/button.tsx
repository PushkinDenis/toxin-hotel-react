import * as React from "react";
import { Button as ButtonMui, StyledEngineProvider } from "@mui/material";
import { Like, LikeActive } from "@shared";
import styles from "./button.module.scss";
import clsx from "clsx";
import { ArrowForward } from "@mui/icons-material";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "text" | "outlined" | "contained" | "wide" | "like";
  text: string;
  isClicked?: boolean;
  link?: string;
};

export const Button: React.FC<ButtonProps> = ({ variant, text, onClick, isClicked, link }) => {
  const [click, setClick] = React.useState<boolean>(false);

  const handleClick = () => {
    click ? setClick(false) : setClick(true);
  };
  return (
    <StyledEngineProvider injectFirst>
      {variant === "text" && (
        <ButtonMui variant="text" className={styles.text} onClick={onClick} href={link}>
          {text}
        </ButtonMui>
      )}
      {variant === "outlined" && (
        <div className={isClicked ? clsx(styles.outline_wrapper, styles.outline) : clsx(styles.outline_wrapper)}>
          <ButtonMui variant="outlined" className={styles.outlined} href={link}>
            {text}
          </ButtonMui>
        </div>
      )}
      {variant === "contained" && (
        <ButtonMui href={link} variant="contained" className={styles.contained}>
          {text}
        </ButtonMui>
      )}
      {variant === "wide" && (
        <ButtonMui href={link} variant="contained" className={styles.wide} endIcon={<ArrowForward className={styles["icon-arrow"]} />}>
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
