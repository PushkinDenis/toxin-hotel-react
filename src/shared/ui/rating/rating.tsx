import { FC } from "react";
import { Rating as RatingMui, StyledEngineProvider } from "@mui/material";
import { RateStar, RateStarChecked } from "@shared";
import styles from "./rating.module.scss";

export const Rating: FC = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <RatingMui className={styles.rating} icon={<RateStarChecked />} emptyIcon={<RateStar />} precision={0.5} />
      </StyledEngineProvider>
    </>
  );
};
