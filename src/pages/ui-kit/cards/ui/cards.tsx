import { FC } from "react";
import { CardsLayout } from "@pages";
import { FindRoomCard, SignUpCard, LogInCard } from "@widgets";

export const Cards: FC = () => {
  return (
    <CardsLayout>
      <FindRoomCard />
      <SignUpCard />
      <LogInCard />
    </CardsLayout>
  );
};
