import { FC } from "react";
import { clsx } from "clsx";
import { ColorBox } from "@entities";

export const ColorsAndType: FC = () => {
  return (
    <>
      <ColorBox backgroundColor="var(--color-dark-shade-100)" />
      <ColorBox backgroundColor="var(--color-dark-shade-75)" />
      <ColorBox backgroundColor="var(--color-dark-shade-50)" />
      <ColorBox backgroundColor="var(--color-dark-shade-25)" />
      <ColorBox backgroundColor="var(--color-dark-shade-5)" />
      <ColorBox backgroundColor="var(--color-purple)" />
      <ColorBox backgroundColor="var(--color-green)" />
    </>
  );
};
