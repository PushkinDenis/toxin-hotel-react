import { FC } from "react";
import { LayoutUiKit } from "@pages";
import { TextField, Dropdown } from "@shared";

export const FormElements: FC = () => {
  return (
    <LayoutUiKit>
      <TextField placeholder={"Email"} />
      <TextField placeholder={"Email"} />
      <Dropdown />
    </LayoutUiKit>
  );
};
