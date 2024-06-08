import { FC, useState } from "react";
import styles from "./text-field.module.scss";
import { FormControl, OutlinedInput, StyledEngineProvider, InputAdornment } from "@mui/material";
import clsx from "clsx";
import { ExpandMore } from "@mui/icons-material";

type TextFieldProps = {
  isActive?: boolean;
  placeholder?: string;
  onClick?: (open: boolean) => void;
  type?: string;
  icon?: boolean;
  value?: string | undefined;
};
export const TextField: FC<TextFieldProps> = ({ placeholder, onClick, type, value, isActive }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClass = () => {
    if (isActive) {
      return clsx(styles.input, styles.input_active);
    } else if (type === "date") {
      return clsx(styles.input, styles.input_date);
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

  return (
    <>
      <StyledEngineProvider injectFirst>
        <FormControl className={styles["form-control"]} sx={{ "& fieldset": { border: "none", padding: "0" } }}>
          <OutlinedInput
            readOnly={type === "date" ? true : false}
            onClick={handleOpen}
            value={value}
            className={handleClass()}
            endAdornment={
              type === "date" ? (
                <InputAdornment position="end" className={styles.icon}>
                  <ExpandMore />
                </InputAdornment>
              ) : undefined
            }
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
