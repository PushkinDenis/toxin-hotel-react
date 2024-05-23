import { FC } from "react";
import { LayoutUiKit } from "@pages";
import { TextField } from "@shared";

export const FormElements: FC = () => {
  return (
    <LayoutUiKit>
      <TextField placeholder={"Email"} />
      <TextField placeholder={"Email"} />
    </LayoutUiKit>
  );
};
