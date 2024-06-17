import { FC, useState } from "react";
import styles from "./text-field.module.scss";
import { FormControl, OutlinedInput, StyledEngineProvider, InputAdornment } from "@mui/material";
import clsx from "clsx";
import { ExpandMore, ArrowForward } from "@mui/icons-material";

type TextFieldProps = {
  isActive?: boolean;
  placeholder?: string;
  onClick?: (open: boolean) => void;
  type?: string;
  icon?: boolean;
  value?: string | undefined;
  mask?: boolean;
};
export const TextField: FC<TextFieldProps> = ({ placeholder, onClick, type, value, isActive }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClass = () => {
    if (isActive) {
      return clsx(styles.input, styles.input_active);
    } else if (type === "date") {
      return clsx(styles.input, styles.input_date);
    } else if (type === "date-wide") {
      return clsx(styles.input, styles["input_date-wide"]);
    } else if (type === "subscription") {
      return clsx(styles.input, styles["input_subscription"]);
    } else {
      return styles.input;
    }
  };

  const handleOpen = () => {
    if (open) {
      setOpen(false);
      onClick!(false);
    } else {
      setOpen(true);
      onClick!(true);
    }
  };

  const handleEndAdornment = () => {
    if (type === "date" || type === "date-wide") {
      return (
        <InputAdornment position="end" className={styles.icon}>
          <ExpandMore />
        </InputAdornment>
      );
    } else if (type === "subscription") {
      return (
        <InputAdornment position="end" className={styles["icon-wrapper"]}>
          <ArrowForward className={styles["arrow-forward-icon"]} />
        </InputAdornment>
      );
    }
  };

  const handleFormClass = () => {
    if (type === "date") {
      return clsx(styles["form-control"], styles["form-control_date"]);
    } else if (type === "subscription") {
      return clsx(styles["form-control"], styles["form-control_subscription"]);
    } else {
      return clsx(styles["form-control"]);
    }
  };

  return (
    <>
      <StyledEngineProvider injectFirst>
        <FormControl className={handleFormClass()} sx={{ "& fieldset": { border: "none", padding: "0" } }}>
          <OutlinedInput
            readOnly={type === "date" || type === "date-wide"}
            onClick={type === "date" || type === "date-wide" ? handleOpen : () => {}}
            value={value}
            className={handleClass()}
            endAdornment={handleEndAdornment()}
            placeholder={placeholder}
            sx={{
              "& input": {
                padding: 0,
              },
            }}
          />
        </FormControl>
      </StyledEngineProvider>
    </>
  );
};
