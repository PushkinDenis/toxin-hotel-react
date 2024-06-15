import { FC, useEffect, useState } from "react";
import { Label, Checkbox } from "@shared";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import styles from "./checkbox-list.module.scss";
import clsx from "clsx";

type CheckboxListProps = {
  labelText: string;
  text: string[];
  isActive?: boolean;
  activeCheckboxes?: boolean[];
};

export const CheckboxList: FC<CheckboxListProps> = ({ text, labelText, isActive, activeCheckboxes }) => {
  const [expand, setExpand] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (isActive) {
      setActive(isActive);
      setExpand(true);
    }
  }, []);

  const handleClick = () => {
    if (expand) {
      setExpand(false);
      setActive(false);
    } else {
      setExpand(true);
      setActive(true);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.label_wrapper} onClick={handleClick}>
        <Label text={labelText} />
        {expand ? <ExpandLess sx={{ fontSize: "24px" }} className={styles.icon}></ExpandLess> : <ExpandMore sx={{ fontSize: "24px" }} className={styles.icon}></ExpandMore>}
      </div>
      <ul className={expand ? styles.list : clsx(styles.list, styles.list_disabled)}>
        {text.map((value, index) => (
          <li className={styles.li}>
            <Checkbox label={value} isChecked={activeCheckboxes !== undefined && activeCheckboxes[index] ? true : false} />
          </li>
        ))}
      </ul>
    </div>
  );
};
