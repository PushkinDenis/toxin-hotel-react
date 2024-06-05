import { FC, useState } from "react";
import styles from "./text-field.module.scss";
import { FormControl, OutlinedInput, StyledEngineProvider } from "@mui/material";
import clsx from "clsx";

type TextFieldProps = {
  placeholder?: string;
  onClick?: (open: boolean) => void;
  type?: string;
};
export const TextField: FC<TextFieldProps> = ({ placeholder, onClick, type }) => {
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
            onClick={handleOpen}
            className={type === "date" ? clsx(styles.input, styles.input_date) : styles.input}
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
