import { FC } from "react";
import styles from "./bullet-list.module.scss";

type BulletListProps = {
  text: string[];
};

export const BulletList: FC<BulletListProps> = ({ text }) => {
  return (
    <ul className={styles.ul}>
      {text.map((value) => (
        <li className={styles.li}>{value}</li>
      ))}
    </ul>
  );
};
