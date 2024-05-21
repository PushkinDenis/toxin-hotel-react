import { FC } from "react";
import { clsx } from "clsx";
import { ColorBox } from "../entities/color-box/ui/color-box";

export const App: FC = () => {
  return <ColorBox backgroundColor="var(--color-dark-shade-100)" />;
};
