import { FC, useState } from "react";
import styles from "./dropdown.module.scss";
import { FormControl, FormHelperText, MenuItem, Select, SelectChangeEvent, StyledEngineProvider, SvgIcon } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

type DropdownProps = {
  placeholder?: string;
};
export const Dropdown: FC<DropdownProps> = () => {
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
            IconComponent={() => <SvgIcon className={styles.icon} component={ExpandMore}></SvgIcon>}
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
            <MenuItem value="" className={styles.menu}>
              None
            </MenuItem>
            <MenuItem value={10} className={styles.menu}>
              Ten
            </MenuItem>
            <MenuItem value={20} className={styles.menu}>
              Twenty
            </MenuItem>
            <MenuItem value={30} className={styles.menu}>
              Thirty
            </MenuItem>
          </Select>
        </FormControl>
      </StyledEngineProvider>
    </>
  );
};
