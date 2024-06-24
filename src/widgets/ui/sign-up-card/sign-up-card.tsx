import { FC } from "react";
import styles from "./sign-up-card.module.scss";
import { WidgetTitle, LabelTemplate, TextField, Radio, Switch, Text, Button } from "@shared";

export const SignUpCard: FC = () => {
  return (
    <div className={styles.wrapper}>
      <WidgetTitle text={"Регистрация аккаунта"} />
      <TextField placeholder={"Имя"} />
      <TextField placeholder={"Фамилия"} />
      <div className={styles.radio_group}>
        <Radio />
      </div>
      <LabelTemplate label={"дата рождения"}>
        <TextField placeholder={"ДД.ММ.ГГГГ"} mask={true} />
      </LabelTemplate>
      <LabelTemplate label={"данные для входа в сервис"}>
        <TextField placeholder={"Email"} />
        <TextField placeholder={"Пароль"} />
      </LabelTemplate>
      <Switch label={"Получать спецпредложения"} />
      <Button variant={"wide"} text={"перейти к оплате"} link="https://pushkindenis.github.io/toxin-hotel-react/room-details" />
      <div className={styles.log_in}>
        <Text type={"black"} text={"Уже есть аккаунт на Toxin"} />
        <Button variant={"outlined"} text={"войти"} link="https://pushkindenis.github.io/toxin-hotel-react/sign-in" />
      </div>
    </div>
  );
};
