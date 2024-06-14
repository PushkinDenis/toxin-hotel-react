import { FC, useState } from "react";
import { Label, Checkbox } from "@shared";
import { Icon } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import styles from "./checkbox-list.module.scss";
import clsx from "clsx";

type CheckboxListProps = {
  labelText: string;
  text: string[];
};

export const CheckboxList: FC<CheckboxListProps> = ({ text, labelText }) => {
  const [expand, setExpand] = useState<boolean>(false);
  const handleClick = () => {
    expand ? setExpand(false) : setExpand(true);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.label_wrapper} onClick={handleClick}>
        <Label text={labelText} />
        {expand ? <ExpandLess sx={{ fontSize: "24px" }} className={styles.icon}></ExpandLess> : <ExpandMore sx={{ fontSize: "24px" }} className={styles.icon}></ExpandMore>}
      </div>

      <ul className={expand ? styles.list : clsx(styles.list, styles.list_disabled)}>
        {text.map((value) => (
          <li className={styles.li}>
            <Checkbox label={value} />
          </li>
        ))}
      </ul>
    </div>
  );
};
