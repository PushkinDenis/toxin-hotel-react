import { FC } from "react";
import { HeadersAndFootersLayout } from "@pages";
import { Header } from "@widgets";
import styles from "./headers-and-footers.module.scss";
import clsx from "clsx";

export const HeadersAndFooters: FC = () => {
  return (
    <HeadersAndFootersLayout>
      <Header />
    </HeadersAndFootersLayout>
  );
};
