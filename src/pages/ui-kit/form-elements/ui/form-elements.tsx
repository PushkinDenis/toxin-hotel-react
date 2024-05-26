import { FC } from "react";
import { LayoutUiKit } from "@pages";
import { Dropdown, TextField } from "@shared";

export const FormElements: FC = () => {
  return (
    <LayoutUiKit>
      <TextField placeholder={"Email"} />
      <TextField placeholder={"Email"} />
      <Dropdown items={["ВЗРОСЛЫЕ", "ДЕТИ", "МЛАДЕНЦЫ"]} />
    </LayoutUiKit>
  );
};
