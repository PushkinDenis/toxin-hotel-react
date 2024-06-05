import { FC } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import Select from "@mui/material/Select";
import { RangeDatePicker } from "@shared";
import { StyledEngineProvider, SvgIcon } from "@mui/material";
import styles from "../../ui/dropdown/dropdown.module.scss";
import { ExpandMore } from "@mui/icons-material";

export const DatePickerDropdown: FC = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <FormControl className={styles["form-control"]} sx={{ "& fieldset": { border: "none" } }}>
          <Select IconComponent={() => <SvgIcon className={styles.icon} component={ExpandMore}></SvgIcon>} className={styles.select} labelId="demo-multiple-checkbox-label" id="demo-multiple-checkbox" input={<OutlinedInput label="Tag" />} multiple value={[]} placeholder={"Всего гостей"}>
            <MenuItem sx={{ background: "none", border: "none", margin: "0", padding: "0", boxShadow: "none", width: "320px", height: "369px" }}>
              <RangeDatePicker />
            </MenuItem>
          </Select>
        </FormControl>
      </StyledEngineProvider>
    </>
  );
};
