import * as React from "react";
import { FC, useRef } from "react";
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
  isActive?: boolean;
  values?: number[];
  type?: "small";
};

export const Dropdown: FC<DropdownProps> = ({ items, isActive, type, values }) => {
  const [val] = React.useState<number | null>(0);
  const [totalVal, setTotalVal] = React.useState<(number | null)[]>([0, 0, 0]);
  const [open, setOpen] = React.useState(false);
  const selectRef = useRef<null | HTMLElement>(null);

  React.useEffect(() => {
    if (isActive) {
      setOpen(true);
    }
    if (values !== undefined) {
      setTotalVal(values);
    }
  }, []);

  const handleValue = () => {
    if (!totalVal.reduce((accum, item) => (accum! += item!), 0) && items[0] !== "СПАЛЬНИ" && items[1] !== "КРОВАТИ" && items[2] !== "ВАННЫЕ КОМНАТЫ") {
      return ["Сколько гостей"];
    } else if (items[0] === "ВЗРОСЛЫЕ" && items[1] === "ДЕТИ" && items[2] === "МЛАДЕНЦЫ") {
      return [`Гостей: ${totalVal.reduce((accum, item) => (accum! += item!), 0)} ${totalVal[2] !== 0 ? `, ${totalVal[2]} младен${totalVal[2]! > 1 ? "цев" : "ец"}` : ""}`];
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
    <StyledEngineProvider injectFirst>
      {items[0] === "ВЗРОСЛЫЕ" && items[1] && "ДЕТИ" && items[2] === "МЛАДЕНЦЫ" ? (
        <FormControl className={styles["form-control"]} sx={{ "& fieldset": { border: "none" } }}>
          <Select
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
            IconComponent={() => <SvgIcon className={styles.icon} component={ExpandMore}></SvgIcon>}
            className={type === "small" ? clsx(styles.select, styles["select-small"]) : styles.select}
            multiple
            ref={selectRef}
            value={handleValue()}
            onChange={handleValue}
            input={<OutlinedInput label="Tag" />}
            MenuProps={{
              anchorEl: selectRef.current,
              disableScrollLock: true,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              anchorPosition: {
                top: 0,
                left: 0,
              },

              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
              PaperProps: {
                className: `${type === "small" ? clsx(styles.paper, styles["paper-small"]) : styles.paper}`,
                elevation: 0,
              },
            }}
            placeholder={"Всего гостей"}
            renderValue={(selected) => selected.join(", ")}
          >
            {items.map((item, index) => (
              <MenuItem key={index} value={item} className={type === "small" ? clsx(styles.menu, styles["menu-small"]) : styles.menu}>
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
        </FormControl>
      ) : (
        <FormControl className={clsx(styles["form-control"], styles["form-control_small"])} sx={{ "& fieldset": { border: "none" } }}>
          <Select
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
            IconComponent={() => <SvgIcon className={styles.icon} component={ExpandMore}></SvgIcon>}
            className={clsx(styles["select-small"], styles.select)}
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={handleValue()}
            onChange={handleValue}
            input={<OutlinedInput label="Tag" />}
            MenuProps={{ classes: { paper: clsx(styles["paper-small"], styles.paper) }, disableScrollLock: true }}
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
        </FormControl>
      )}
    </StyledEngineProvider>
  );
};
