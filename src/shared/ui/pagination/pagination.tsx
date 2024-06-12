import { FC } from "react";
import { Pagination as PaginationMui, PaginationItem } from "@mui/material";
import styles from "./pagination.module.scss";
import { ArrowForward, ArrowBack } from "@mui/icons-material";

type PaginationProps = {
  text: string;
};

export const Pagination: FC<PaginationProps> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <PaginationMui count={15} siblingCount={0} className={styles.pagination} renderItem={(item) => <PaginationItem slots={{ previous: ArrowBack, next: ArrowForward }} {...item} />} />
      <div className={styles.description}>{text}</div>
    </div>
  );
};
