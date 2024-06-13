import { FC } from "react";
import styles from "./feature.module.scss";
import { Icon } from "@mui/material";

type FeatureProps = {
  text?: string;
  description?: string;
  img?: string;
};

export const Feature: FC<FeatureProps> = ({ text, description, img }) => {
  return (
    <div className={styles.wrapper}>
      <img src={img} className={styles.img}></img>
      <div className={styles.text_wrapper}>
        <div className={styles.text}>{text}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
