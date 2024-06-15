import { FC, useEffect, useState } from "react";
import styles from "./checkbox.module.scss";
import { Checkbox as CheckboxMui, StyledEngineProvider } from "@mui/material";
import { CheckboxDefault, CheckboxChecked } from "@shared";
import clsx from "clsx";

type CheckboxProps = {
  type?: string;
  label?: string;
  description?: string;
  isChecked?: boolean;
};

export const Checkbox: FC<CheckboxProps> = ({ label, description, type, isChecked }) => {
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
        <label className={type === "rich" ? clsx(styles.form, styles.form_rich) : styles.form}>
          <CheckboxMui onClick={handleActive} className={styles.checkbox} icon={<CheckboxDefault />} checkedIcon={<CheckboxChecked />} checked={active} />
          {type === "rich" ? (
            <div className={styles.label_wrapper}>
              <div className={clsx(styles.label_rich, styles.label)}>{label}</div>
              <div className={styles.label_description}>{description}</div>
            </div>
          ) : (
            <div className={clsx(styles.label)}>{label}</div>
          )}
        </label>
      </StyledEngineProvider>
    </>
  );
};
