import { FC } from "react";
import { CardsLayout } from "@pages";
import { FindRoomCard, SignUpCard, LogInCard, BillCard, RoomCard } from "@widgets";
import { RangeDatePicker } from "@shared";
import styles from "./cards.module.scss";
export const Cards: FC = () => {
  return (
    <CardsLayout>
      <RoomCard type="photos" roomNumber={"№ 888"} roomType={"люкс"} price={"9 990₽ "} feedbackNumber={"145"} image={"./pictures/room_1.png"} />
      <RoomCard roomNumber={"№ 840"} roomType={""} price={"9 990₽ "} feedbackNumber={"65"} image={"./pictures/room_2.png"} />
      <FindRoomCard />
      <SignUpCard />
      <LogInCard />
      <BillCard />
      <div className={styles.date_wrapper}>
        <RangeDatePicker isStatic />
      </div>
    </CardsLayout>
  );
};
