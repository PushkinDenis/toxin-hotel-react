import { FC } from "react";
import styles from "./bill-card.module.scss";
import { WidgetTitle, Text, Button, DatePickerDropdown, LabelTemplate, Dropdown } from "@shared";

export const BillCard: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.label_wrapper}>
        <div className={styles.label_left}>
          <WidgetTitle text={"№ 888"} />
          <Text type={"purple"} text={"люкс"} />
        </div>
        <div className={styles.label_right}>
          <span className={styles.label_text}>9 990₽ </span>
          <span className={styles.label_text}>в сутки</span>
        </div>
      </div>
      <DatePickerDropdown label_first={"прибытие"} label_second={"выезд"} type={"date"} />
      <LabelTemplate label={"гости"}>
        <Dropdown items={["ВЗРОСЛЫЕ", "ДЕТИ", "МЛАДЕНЦЫ"]} />
      </LabelTemplate>
      <div className={styles.expenses}>
        <div className={styles.expense}>
          <span className={styles.text}>9 990₽ х 4 суток</span>
          <span className={styles.text}>39 960₽</span>
        </div>
        <div className={styles.expense}>
          <span className={styles.text}>Сбор за услуги: скидка 2 179₽</span>
          <span className={styles.text}>0₽</span>
        </div>
        <div className={styles.expense}>
          <span className={styles.text}>Сбор за дополнительные услуги</span>
          <span className={styles.text}>300₽</span>
        </div>
      </div>
      <div className={styles.total_price}>
        <WidgetTitle text={"Итого"} />
        <WidgetTitle text={"38 081₽"} />
      </div>
      <Button variant={"wide"} text={"забронировать"} />
    </div>
  );
};
