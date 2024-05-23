import { FC } from "react";
import styles from "./text-field.module.scss";
import { FormControl, OutlinedInput, StyledEngineProvider } from "@mui/material";

type TextFieldProps = {
  placeholder?: string;
};
export const TextField: FC<TextFieldProps> = ({ placeholder }) => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <FormControl className={styles["form-control"]} sx={{ "& fieldset": { border: "none" } }}>
          <OutlinedInput
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
