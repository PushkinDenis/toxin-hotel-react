import { FC } from "react";
import styles from "./log-in-card.module.scss";
import { WidgetTitle, TextField, Text, Button } from "@shared";

export const LogInCard: FC = () => {
  return (
    <div className={styles.wrapper}>
      <WidgetTitle text={"Войти"} />
      <TextField placeholder={"Email"} />
      <TextField placeholder={"Пароль"} />
      <Button variant={"wide"} text={"войти"} />
      <div className={styles.sign_up}>
        <Text type={"black"} text={"Нет аккаунта на Toxin?"} />
        <Button variant={"outlined"} text={"создать"} link="https://pushkindenis.github.io/toxin-hotel-react/registration" />
      </div>
    </div>
  );
};
