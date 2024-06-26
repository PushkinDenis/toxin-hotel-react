import { FC } from "react";
import styles from "./header.module.scss";
import { Button } from "@shared";
type HeaderProps = {
  isUserAuthorized: boolean;
};

export const Header: FC<HeaderProps> = ({ isUserAuthorized }) => {
  return (
    <header className={styles.header}>
      <a href="https://pushkindenis.github.io/toxin-hotel-react/landing-page">
        <div className={styles.header_logo_wrapper}>
          <img src="./icons/toxin-logo.svg" alt="logo" className={styles.logo} />
          <img src="./icons/toxin-logo-text.svg" alt="toxin" className={styles.logo} />
        </div>
      </a>
      <nav className={styles.navigation}>
        <div className={styles.links}>
          <a href="#">
            <span className={styles.link}>О нас</span>
          </a>
          <a href="#">
            <span className={styles.link}>Услуги</span>
            <span className={styles.icon}></span>
          </a>
          <a href="#">
            <span className={styles.link}>Вакансии</span>
          </a>
          <a href="#">
            <span className={styles.link}>Новости</span>
          </a>
          <a href="#">
            <span className={styles.link}>Соглашения</span>
            <span className={styles.icon}></span>
          </a>
        </div>
        {!isUserAuthorized ? (
          <div className={styles.authorization_buttons}>
            <Button variant="outlined" text="войти" link={"https://pushkindenis.github.io/toxin-hotel-react/sign-in"} />
            <Button variant="contained" text="зарегистрироваться" link={"https://pushkindenis.github.io/toxin-hotel-react/registration"} />
          </div>
        ) : (
          <span className={styles.user}>Юлий Цезарь</span>
        )}
      </nav>
    </header>
  );
};
