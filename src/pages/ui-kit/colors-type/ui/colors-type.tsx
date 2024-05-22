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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusantium, voluptates sit itaque odit adipisci reiciendis maiores alias, unde totam dolorem tempora, facere quis at officiis quo? Expedita, temporibus repellat.</p>
    </>
  );
};
