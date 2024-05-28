import * as React from "react";
import { FC } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Counter } from "@shared";
import { StyledEngineProvider, SvgIcon } from "@mui/material";
import styles from "./dropdown.module.scss";
import { ExpandMore } from "@mui/icons-material";

type DropdownProps = {
  items: string[];
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const Dropdown: FC<DropdownProps> = ({ items }) => {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [val, setVal] = React.useState<number | null>(0);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <StyledEngineProvider injectFirst>
        <FormControl className={styles["form-control"]} sx={{ "& fieldset": { border: "none" } }}>
          <Select
            IconComponent={() => <SvgIcon className={styles.icon} component={ExpandMore}></SvgIcon>}
            className={styles.select}
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={[`${val}`]}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {items.map((item) => (
              <MenuItem key={items} value={item}>
                <Counter
                  onChange={(val) => {
                    setVal(val);
                  }}
                />
                <ListItemText primary={item} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </StyledEngineProvider>
    </>
  );
};
