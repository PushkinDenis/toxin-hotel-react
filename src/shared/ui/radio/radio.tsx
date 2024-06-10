import { FC, useState } from "react";
import styles from "./radio.module.scss";
import { Radio as RadioMui, StyledEngineProvider, FormControlLabel } from "@mui/material";
import { RadioChecked, RadioIcon } from "@shared";
import clsx from "clsx";

type RadioProps = {
  label?: string;
};

export const Radio: FC<RadioProps> = ({ label }) => {
  const [click, setClick] = useState<boolean>(false);

  const handleClick = () => {
    click ? setClick(false) : setClick(true);
  };
  return (
    <>
      <StyledEngineProvider injectFirst>
        <FormControlLabel className={click ? clsx(styles.form, styles.form_active) : styles.form} control={<RadioMui onClick={handleClick} icon={<RadioIcon />} checkedIcon={<RadioChecked />} />} label={label} />
      </StyledEngineProvider>
    </>
  );
};
