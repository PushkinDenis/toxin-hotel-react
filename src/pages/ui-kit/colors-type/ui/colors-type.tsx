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
  const typeArr = [
    {
      name: "H1",
      description: "This one is the sub-section or widget title",
    },
    {
      name: "H2",
      description: "Next one is the item title inside widgets",
    },
    {
      name: "H3",
      description: "This is a label or CTA text",
    },
    {
      name: "Body",
      description: "This is the body text which is used for most of the design, like paragraphs, lists, etc.",
    },
  ];
  return (
    <LayoutUiKit>
      <div className={clsx(styles.wrapper)}>
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
        <div className={clsx(styles.type)}>
          {typeArr.map((value) => {
            return (
              <div className={clsx(styles["type-block"])}>
                {value.name === "H1" && (
                  <>
                    <h1>{value.name}</h1>
                    <h1>{value.description}</h1>
                  </>
                )}
                {value.name === "H2" && (
                  <>
                    <h2>{value.name}</h2>
                    <h2>{value.description}</h2>
                  </>
                )}
                {value.name === "H3" && (
                  <>
                    <h3>{value.name}</h3>
                    <h3>{value.description}</h3>
                  </>
                )}
                {value.name === "Body" && (
                  <>
                    <p>{value.name}</p>
                    <p>{value.description}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </LayoutUiKit>
  );
};
