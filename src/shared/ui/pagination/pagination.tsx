import { FC } from "react";
import { Pagination as PaginationMui } from "@mui/material";
import styles from "./pagination.module.scss";

export const Pagination: FC = () => {
  return <PaginationMui count={10} className={styles.pagination} />;
};
