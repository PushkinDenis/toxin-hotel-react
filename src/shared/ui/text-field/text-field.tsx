import { FC, useState } from "react";
import styles from "./text-field.module.scss";
import { FormControl, OutlinedInput, StyledEngineProvider, InputAdornment } from "@mui/material";
import clsx from "clsx";
import { ExpandMore } from "@mui/icons-material";

type TextFieldProps = {
  placeholder?: string;
  onClick?: (open: boolean) => void;
  type?: string;
  icon?: boolean;
  value?: string | undefined;
};
export const TextField: FC<TextFieldProps> = ({ placeholder, onClick, type, value }) => {
  const [open, setOpen] = useState<boolean>(false);

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
            className={type === "date" ? clsx(styles.input, styles.input_date) : styles.input}
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
