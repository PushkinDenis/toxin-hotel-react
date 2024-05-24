import { FC, useState } from "react";
import styles from "./dropdown.module.scss";
import { FormControl, Select, StyledEngineProvider, MenuItem, FormHelperText, SelectChangeEvent } from "@mui/material";

type DropdownProps = {
  placeholder?: string;
};
export const Dropdown: FC<DropdownProps> = ({ placeholder }) => {
  const [age, setAge] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <>
      <StyledEngineProvider injectFirst>
        <FormControl className={styles["form-control"]} sx={{ "& fieldset": { border: "none" } }}>
          <FormHelperText>Without label</FormHelperText>
          <Select
            className={styles.select}
            value={age}
            onChange={handleChange}
            displayEmpty
            sx={{
              "& div": {
                padding: 0,
              },
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </StyledEngineProvider>
    </>
  );
};
