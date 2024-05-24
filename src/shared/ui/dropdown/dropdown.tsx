import { FC, useState } from "react";
import styles from "./text-field.module.scss";
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
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <FormHelperText>Without label</FormHelperText>
          <Select value={age} onChange={handleChange} displayEmpty inputProps={{ "aria-label": "Without label" }}>
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
