import { FC } from "react";
import styles from "./footer.module.scss";
import { TextField } from "@shared";
import clsx from "clsx";
clsx;
type FooterProps = {
  isUserAuthorized?: boolean;
};

export const Footer: FC<FooterProps> = ({ isUserAuthorized }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_logo_column}>
          <div className={styles.footer_logo_wrapper}>
            <img src="./icons/toxin-logo.svg" alt="logo" className={styles.logo} />
            <img src="./icons/toxin-logo-text.svg" alt="toxin" className={styles.logo} />
          </div>
          <span className={styles.footer_logo_text}>Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»</span>
        </div>
        <div className={clsx(styles.footer_column)}>
          <span className={clsx(styles.footer_head)}>навигация</span>
          <a href="#">
            <span className={styles.footer_link}>О нас</span>
          </a>
          <a href="#">
            <span className={styles.footer_link}>Новости</span>
          </a>
          <a href="#">
            <span className={styles.footer_link}>Служба поддержки</span>
          </a>
          <a href="#">
            <span className={styles.footer_link}>Услуги</span>
          </a>
        </div>
        <div className={clsx(styles.footer_column)}>
          <span className={clsx(styles.footer_head)}>о нас</span>
          <a href="#">
            <span className={styles.footer_link}>О сервисе</span>
          </a>
          <a href="#">
            <span className={styles.footer_link}>Наша команда</span>
          </a>
          <a href="#">
            <span className={styles.footer_link}>Вакансии</span>
          </a>
          <a href="#">
            <span className={styles.footer_link}>Инвесторы</span>
          </a>
        </div>
        <div className={clsx(styles.footer_column)}>
          <span className={clsx(styles.footer_head)}>Служба поддержки</span>
          <a href="#">
            <span className={styles.footer_link}>Соглашения</span>
          </a>
          <a href="#">
            <span className={styles.footer_link}>Сообщества</span>
          </a>
          <a href="#">
            <span className={styles.footer_link}>Связь с нами</span>
          </a>
        </div>
        <div className={clsx(styles.footer_column)}>
          <span className={clsx(styles.footer_head)}>Подписка</span>
          <a href="#">
            <span className={styles.footer_link}>Получайте специальные предложения и новости сервиса</span>
          </a>
          <TextField type="subscription" placeholder="Email" />
        </div>
      </div>
    </div>
  );
};
