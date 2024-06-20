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
        <div className={styles.links}>
          <span className={styles.link}>О нас</span>
          <span className={styles.link}>Услуги</span>
          <span className={styles.link}>Вакансии</span>
          <span className={styles.link}>Новости</span>
          <span className={styles.link}>Соглашения</span>
        </div>
        {!isUserAuthorized ? (
          <div className={styles.authorization_buttons}>
            <Button variant="outlined" text="войти" />
            <Button variant="contained" text="зарегистрироваться" />
          </div>
        ) : (
          <p>Юлий Цезарь</p>
        )}
      </nav>
    </div>
  );
};
