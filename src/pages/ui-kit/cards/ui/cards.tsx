import { FC } from "react";
import { CardsLayout } from "@pages";
import { FindRoomCard, SignUpCard } from "@widgets";

export const Cards: FC = () => {
  return (
    <CardsLayout>
      <FindRoomCard />
      <SignUpCard />
    </CardsLayout>
  );
};
