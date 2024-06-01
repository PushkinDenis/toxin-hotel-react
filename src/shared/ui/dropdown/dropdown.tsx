import * as React from "react";
import { FC } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, Counter } from "@shared";
import { StyledEngineProvider, SvgIcon } from "@mui/material";
import styles from "./dropdown.module.scss";
import { ExpandMore } from "@mui/icons-material";
import { clsx } from "clsx";

type DropdownProps = {
  items: string[];
};

export const Dropdown: FC<DropdownProps> = ({ items }) => {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [val, setVal] = React.useState<number | null>(0);
  const [totalVal, setTotalVal] = React.useState<(number | null)[]>([0, 0, 0]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  const handleValue = () => {
    if (!totalVal.reduce((accum, item) => (accum! += item!), 0) && items[0] !== "СПАЛЬНИ" && items[1] !== "КРОВАТИ" && items[2] !== "ВАННЫЕ КОМНАТЫ") {
      return ["Сколько гостей"];
    } else if (items[0] === "ВЗРОСЛЫЕ" && items[1] === "ДЕТИ" && items[2] === "МЛАДЕНЦЫ") {
      return [`Гостей: ${totalVal.reduce((accum, item) => (accum! += item!), 0)}`];
    } else if (items[0] === "СПАЛЬНИ" && items[1] === "КРОВАТИ" && items[2] === "ВАННЫЕ КОМНАТЫ") {
      return [`${totalVal[0]} спальни, ${totalVal[1]} кровати, ${totalVal[2]} ванных комнаты`];
    } else {
      console.log(val);
      return;
    }
  };

  return (
    <>
      <StyledEngineProvider injectFirst>
        <FormControl className={styles["form-control"]} sx={{ "& fieldset": { border: "none" } }}>
          {items[0] === "ВЗРОСЛЫЕ" && items[1] && "ДЕТИ" && items[2] === "МЛАДЕНЦЫ" ? (
            <Select
              IconComponent={() => <SvgIcon className={styles.icon} component={ExpandMore}></SvgIcon>}
              className={styles.select}
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={handleValue()}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              MenuProps={{ classes: { paper: styles.paper } }}
              placeholder={"Всего гостей"}
              renderValue={(selected) => selected.join(", ")}
            >
              {items.map((item, index) => (
                <MenuItem key={index} value={item} className={styles.menu}>
                  <ListItemText primary={item} className={styles.item} />
                  <Counter
                    onChange={(val) => {
                      setVal(val);
                      items[0] === item ? setTotalVal([val, totalVal[1], totalVal[2]]) : totalVal;
                      items[1] === item ? setTotalVal([totalVal[0], val, totalVal[2]]) : totalVal;
                      items[2] === item ? setTotalVal([totalVal[0], totalVal[1], val]) : totalVal;
                    }}
                  />
                </MenuItem>
              ))}
              <MenuItem className={styles["menu-buttons"]}>
                {totalVal.reduce((accum, item) => (accum! += item!), 0) !== 0 ? <Button variant="text" text="ОЧИСТИТЬ" /> : <div></div>}
                <Button variant="text" text="ПРИМЕНИТЬ" />
              </MenuItem>
            </Select>
          ) : (
            <Select
              IconComponent={() => <SvgIcon className={styles.icon} component={ExpandMore}></SvgIcon>}
              className={clsx(styles["select-small"], styles.select)}
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={handleValue()}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              MenuProps={{ classes: { paper: clsx(styles["paper-small"], styles.paper) } }}
              placeholder={"Всего гостей"}
              renderValue={(selected) => selected.join(", ")}
            >
              {items.map((item, index) => (
                <MenuItem key={index} value={item} className={clsx(styles.menu, styles["menu-small"])}>
                  <ListItemText primary={item} className={styles.item} />
                  <Counter
                    onChange={(val) => {
                      setVal(val);
                      items[0] === item ? setTotalVal([val, totalVal[1], totalVal[2]]) : totalVal;
                      items[1] === item ? setTotalVal([totalVal[0], val, totalVal[2]]) : totalVal;
                      items[2] === item ? setTotalVal([totalVal[0], totalVal[1], val]) : totalVal;
                    }}
                  />
                </MenuItem>
              ))}
            </Select>
          )}
        </FormControl>
      </StyledEngineProvider>
    </>
  );
};
