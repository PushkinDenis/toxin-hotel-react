import { FC } from "react";
import { CardsLayout } from "@pages";
import { FindRoomCard } from "@widgets";

export const Cards: FC = () => {
  return (
    <CardsLayout>
      <FindRoomCard />
    </CardsLayout>
  );
};
