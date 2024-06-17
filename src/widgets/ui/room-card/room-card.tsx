import { FC } from "react";
import styles from "./room-card.module.scss";
import { WidgetTitle, Text, Rating } from "@shared";

type RoomCardProps = {
  roomNumber: string;
  roomType: string;
  price: string;
  feedbackNumber: string;
  image: string;
};

export const RoomCard: FC<RoomCardProps> = ({ roomNumber, roomType, price, feedbackNumber, image }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt={"room"} className={styles.image} />
      <div className={styles.main}>
        <div className={styles.row_first}>
          <div className={styles.title}>
            <WidgetTitle text={roomNumber} />
            <Text type={"purple"} text={roomType} />
          </div>
          <div className={styles.price}>
            <span className={styles.label_text}>
              <strong>{price + " "}</strong>
            </span>
            <span className={styles.label_text}>в сутки</span>
          </div>
        </div>
        <div className={styles.row_second}>
          <Rating defaultValue={5} />
          <div className={styles.price}>
            <span className={styles.label_text}>
              <strong>
                <span>{`${feedbackNumber}`}</span>
              </strong>
            </span>
            <span className={styles.label_text}>{" " + "Отзывов"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
