import { FC, ReactNode } from "react";
import styles from "./layout.module.scss";
import { Header, Footer } from "@widgets";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header isUserAuthorized={false} />
      {children}
      <Footer />
    </div>
  );
};
