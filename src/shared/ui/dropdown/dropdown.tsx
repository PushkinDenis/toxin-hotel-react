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
interface Cnt {
  firstCnt: number | null;
  secCnt: number | null;
  thirdCnt: number | null;
}

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
  const [totalVal, setTotalVal] = React.useState<any[]>([0, 0, 0]);

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
            value={items[0] === "ВЗРОСЛЫЕ" ? [`Гостей: ${totalVal.reduce((accum, item) => (accum += item), 0)}`] : [`${totalVal[0]} кровати, ${totalVal[1]} дивана`]}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {items.map((item, index) => (
              <MenuItem key={index} value={item}>
                <Counter
                  onChange={(val) => {
                    setVal(val);
                    items[0] === item ? setTotalVal([val, totalVal[1], totalVal[2]]) : totalVal;
                    items[1] === item ? setTotalVal([totalVal[0], val, totalVal[2]]) : totalVal;
                    items[2] === item ? setTotalVal([totalVal[0], totalVal[1], val]) : totalVal;
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
