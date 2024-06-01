import { FC } from "react";
import { LayoutUiKit } from "@pages";
import { Dropdown, TextField } from "@shared";

export const FormElements: FC = () => {
  console.log("frf");
  return (
    <LayoutUiKit>
      <TextField placeholder={"Email"} />
      <TextField placeholder={"Email"} />
      <Dropdown items={["ВЗРОСЛЫЕ", "ДЕТИ", "МЛАДЕНЦЫ"]} />
      <Dropdown items={["СПАЛЬНИ", "КРОВАТИ", "ВАННЫЕ КОМНАТЫ"]} />
    </LayoutUiKit>
  );
};
