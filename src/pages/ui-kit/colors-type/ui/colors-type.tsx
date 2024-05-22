import { FC } from "react";
import { clsx } from "clsx";
import { ColorBox } from "@entities";
import { LayoutUiKit } from "@pages";
import styles from "./colors-type.module.scss";
export const ColorsAndType: FC = () => {
  return (
    <LayoutUiKit>
      <div className={clsx(styles.color)}>
        <div className={clsx(styles["color-block"])}>
          <ColorBox backgroundColor="var(--color-dark-shade-100)" />
          <div className={clsx(styles["color-label"])}>
            <h2>Dark Shade 100%</h2>
            <p>#1F2041</p>
          </div>
        </div>
        <div className={clsx(styles["color-block"])}>
          <ColorBox backgroundColor="var(--color-dark-shade-75)" />
          <div className={clsx(styles["color-label"])}>
            <h2>Dark Shade 75%</h2>
            <p>#1F2041</p>
          </div>
        </div>
        <div className={clsx(styles["color-block"])}>
          <ColorBox backgroundColor="var(--color-dark-shade-50)" />
          <div className={clsx(styles["color-label"])}>
            <h2>Dark Shade 50%</h2>
            <p>#1F2041</p>
          </div>
        </div>
        <div className={clsx(styles["color-block"])}>
          <ColorBox backgroundColor="var(--color-dark-shade-25)" />
          <div className={clsx(styles["color-label"])}>
            <h2>Dark Shade 25%</h2>
            <p>#1F2041</p>
          </div>
        </div>
        <div className={clsx(styles["color-block"])}>
          <ColorBox backgroundColor="var(--color-dark-shade-5)" />
          <div className={clsx(styles["color-label"])}>
            <h2>Dark Shade 5%</h2>
            <p>#1F2041</p>
          </div>
        </div>
        <div className={clsx(styles["color-block"])}>
          <ColorBox backgroundColor="var(--color-purple)" />
          <div className={clsx(styles["color-label"])}>
            <h2>Purple </h2>
            <p>#BC9CFF</p>
          </div>
        </div>
        <div className={clsx(styles["color-block"])}>
          <ColorBox backgroundColor="var(--color-green)" />
          <div className={clsx(styles["color-label"])}>
            <h2>Green </h2>
            <p>#6FCF97</p>
          </div>
        </div>
      </div>
    </LayoutUiKit>
  );
};
