import { FC } from "react";
import { clsx } from "clsx";
import { ColorBox } from "@entities";
import { LayoutUiKit } from "@pages";
import styles from "./colors-type.module.scss";
export const ColorsAndType: FC = () => {
  const colorBlockArr = [
    { color: "var(--color-dark-shade-100)", h2: "Dark Shade 100%", p: "#1F2041" },
    { color: "var(--color-dark-shade-75)", h2: "Dark Shade 75%", p: "#1F2041" },
    { color: "var(--color-dark-shade-50)", h2: "Dark Shade 50%", p: "#1F2041" },
    { color: "var(--color-dark-shade-25)", h2: "Dark Shade 25%", p: "#1F2041" },
    { color: "var(--color-dark-shade-5)", h2: "Dark Shade 5%", p: "#1F2041" },
    { color: "var(--color-purple)", h2: "Purple", p: "#BC9CFF" },
    { color: "var(--color-green)", h2: "Green", p: "#6FCF97" },
  ];
  return (
    <LayoutUiKit>
      <div className={clsx(styles.color)}>
        {colorBlockArr.map((value) => {
          return (
            <div className={clsx(styles["color-block"])}>
              <ColorBox backgroundColor={value.color} />
              <div className={clsx(styles["color-label"])}>
                <h2>{value.h2}</h2>
                <p>{value.p}</p>
              </div>
            </div>
          );
        })}
      </div>
    </LayoutUiKit>
  );
};
