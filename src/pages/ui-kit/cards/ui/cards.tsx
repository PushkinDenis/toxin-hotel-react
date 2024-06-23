import { FC } from "react";
import { CardsLayout } from "@pages";
import { FindRoomCard, SignUpCard, LogInCard, BillCard, RoomCard } from "@widgets";
import { RangeDatePicker } from "@shared";
import styles from "./cards.module.scss";
import clsx from "clsx";

export const Cards: FC = () => {
  return (
    <CardsLayout>
      <div className={clsx(styles.column, styles.column_first)}>
        <FindRoomCard />
        <SignUpCard />
      </div>
      <div className={clsx(styles.column, styles.column_second)}>
        <BillCard />
        <LogInCard />
      </div>
      <div className={clsx(styles.column, styles.column_third)}>
        <div className={styles.date_wrapper}>
          <RangeDatePicker isStatic />
        </div>
        <RoomCard type="photos" roomNumber={"№ 888"} roomType={"люкс"} price={"9 990₽ "} feedbackNumber={"145"} image={"./pictures/room_1.png"} rating={5} />
        <RoomCard roomNumber={"№ 840"} roomType={""} price={"9 990₽ "} feedbackNumber={"65"} image={"./pictures/room_2.png"} rating={5} />
      </div>
    </CardsLayout>
  );
};
