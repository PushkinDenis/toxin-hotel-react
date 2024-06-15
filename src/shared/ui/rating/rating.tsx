import { FC } from "react";
import { Rating as RatingMui, StyledEngineProvider } from "@mui/material";
import { RateStar, RateStarChecked } from "@shared";
import styles from "./rating.module.scss";

type RatingProps = {
  defaultValue?: number;
};

export const Rating: FC<RatingProps> = ({ defaultValue }) => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <RatingMui className={styles.rating} icon={<RateStarChecked />} emptyIcon={<RateStar />} precision={0.5} defaultValue={defaultValue} />
      </StyledEngineProvider>
    </>
  );
};
