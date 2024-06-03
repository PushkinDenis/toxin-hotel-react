import * as React from "react";
import { FC } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import { Button, Counter } from "@shared";
import { StyledEngineProvider, SvgIcon } from "@mui/material";
import styles from "./dropdown.module.scss";
import { ExpandMore } from "@mui/icons-material";
import { clsx } from "clsx";

type DropdownProps = {
  items: string[];
};

export const Dropdown: FC<DropdownProps> = ({ items }) => {
  const [val] = React.useState<number | null>(0);
  const [totalVal, setTotalVal] = React.useState<(number | null)[]>([0, 0, 0]);
  const [open, setOpen] = React.useState(true);

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
  const handleCounterChange = (index: number, value: number | null) => {
    const newTotalVal = [...totalVal];
    newTotalVal[index] = value;
    setTotalVal(newTotalVal);
  };

  const handleCancel = () => {
    setTotalVal([0, 0, 0]);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <StyledEngineProvider injectFirst>
        <FormControl className={styles["form-control"]} sx={{ "& fieldset": { border: "none" } }}>
          {items[0] === "ВЗРОСЛЫЕ" && items[1] && "ДЕТИ" && items[2] === "МЛАДЕНЦЫ" ? (
            <Select
              open={open}
              onOpen={handleOpen}
              onClose={handleClose}
              IconComponent={() => <SvgIcon className={styles.icon} component={ExpandMore}></SvgIcon>}
              className={styles.select}
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={handleValue()}
              onChange={handleValue}
              input={<OutlinedInput label="Tag" />}
              MenuProps={{ classes: { paper: styles.paper } }}
              placeholder={"Всего гостей"}
              renderValue={(selected) => selected.join(", ")}
            >
              {items.map((item, index) => (
                <MenuItem key={index} value={item} className={styles.menu}>
                  <ListItemText primary={item} className={styles.item} />
                  <Counter
                    initialValue={totalVal[index]}
                    onChange={(val) => {
                      handleCounterChange(index, val);
                    }}
                  />
                </MenuItem>
              ))}
              <MenuItem className={styles["menu-buttons"]}>
                {totalVal.reduce((accum, item) => (accum! += item!), 0) !== 0 ? <Button variant="text" text="ОЧИСТИТЬ" onClick={handleCancel} /> : <div></div>}
                <Button variant="text" text="ПРИМЕНИТЬ" onClick={handleClose} />
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
              onChange={handleValue}
              input={<OutlinedInput label="Tag" />}
              MenuProps={{ classes: { paper: clsx(styles["paper-small"], styles.paper) } }}
              placeholder={"Всего гостей"}
              renderValue={(selected) => selected.join(", ")}
            >
              {items.map((item, index) => (
                <MenuItem key={index} value={item} className={clsx(styles.menu, styles["menu-small"])}>
                  <ListItemText primary={item} className={styles.item} />
                  <Counter
                    initialValue={totalVal[index]}
                    onChange={(val) => {
                      handleCounterChange(index, val);
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
