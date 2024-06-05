import { FC, useState } from "react";
import styles from "./text-field.module.scss";
import { FormControl, OutlinedInput, StyledEngineProvider } from "@mui/material";

type TextFieldProps = {
  placeholder?: string;
  onClick?: (open: boolean) => void;
};
export const TextField: FC<TextFieldProps> = ({ placeholder, onClick }) => {
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
        <FormControl className={styles["form-control"]} sx={{ "& fieldset": { border: "none" } }}>
          <OutlinedInput
            onClick={handleOpen}
            className={styles.input}
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
