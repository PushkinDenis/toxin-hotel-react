import { FC, useEffect, useState } from "react";
import styles from "./radio.module.scss";
import { Checkbox as RadioMui, StyledEngineProvider, FormControlLabel } from "@mui/material";
import { RadioChecked, RadioIcon } from "@shared";
import clsx from "clsx";

type RadioProps = {
  label?: string;
  isChecked?: boolean;
};

export const Radio: FC<RadioProps> = ({ label, isChecked }) => {
  const [click, setClick] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (isChecked) {
      setActive(true);
    }
  }, []);

  const handleClick = () => {
    click ? setClick(false) : setClick(true);
    active ? setActive(false) : setActive(true);
  };
  return (
    <>
      <StyledEngineProvider injectFirst>
        <FormControlLabel className={click ? clsx(styles.form, styles.form_active) : styles.form} control={<RadioMui checked={active} onClick={handleClick} icon={<RadioIcon />} checkedIcon={<RadioChecked />} />} label={label} />
      </StyledEngineProvider>
    </>
  );
};
