import { FC } from "react";
import { clsx } from "clsx";
import { LayoutUiKit } from "@pages";
import { TextField } from "@shared";
import { FormControl, OutlinedInput } from "@mui/material";

export const FormElements: FC = () => {
  return (
    <LayoutUiKit>
      <TextField />
    </LayoutUiKit>
  );
};
