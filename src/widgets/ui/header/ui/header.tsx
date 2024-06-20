import { FC } from "react";
import styles from "./header.module.scss";
import clsx from "clsx";
import { Button } from "@shared";
type HeaderProps = {
  isUserAuthorized: boolean;
};

export const Header: FC<HeaderProps> = ({ isUserAuthorized }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header_logo_wrapper}>
        <img src="./icons/toxin-logo.svg" alt="logo" className={styles.logo} />
        <img src="./icons/toxin-logo-text.svg" alt="toxin" className={styles.logo} />
      </div>
      <nav className={styles.navigation}>
        {!isUserAuthorized ? (
          <>
            <Button variant="wide" text="зарегистрироваться" /> <Button variant="outlined" text="войти" />
          </>
        ) : (
          <p>Юлий Цезарь</p>
        )}
      </nav>
    </div>
  );
};
