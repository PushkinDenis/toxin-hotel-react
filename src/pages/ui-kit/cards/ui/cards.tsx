import { FC } from "react";
import { CardsLayout } from "@pages";
import { FindRoomCard, SignUpCard, LogInCard, BillCard } from "@widgets";
import { RangeDatePicker } from "@shared";

export const Cards: FC = () => {
  return (
    <CardsLayout>
      <FindRoomCard />
      <SignUpCard />
      <LogInCard />
      <BillCard />
      <RangeDatePicker isStatic />
    </CardsLayout>
  );
};
