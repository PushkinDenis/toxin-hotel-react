import { FC, useEffect, useState } from "react";
import styles from "./switch.module.scss";
import { Switch as SwitchMui, StyledEngineProvider, FormControlLabel } from "@mui/material";

type SwitchProps = {
  label?: string;
  isChecked?: boolean;
};

export const Switch: FC<SwitchProps> = ({ label, isChecked }) => {
  const [active, setActive] = useState<boolean>(false);
  const handleActive = () => {
    active ? setActive(false) : setActive(true);
  };
  useEffect(() => {
    if (isChecked) {
      setActive(true);
    }
  }, []);
  return (
    <>
      <StyledEngineProvider injectFirst>
        <FormControlLabel className={styles.label} control={<SwitchMui className={styles.switch} />} label={label} onClick={handleActive} checked={active} />
      </StyledEngineProvider>
    </>
  );
};
