import { FC } from "react";
import styles from "./rating.module.scss";
import { Rating as RatingMui, StyledEngineProvider, FormControlLabel } from "@mui/material";
import { RateStar, RateStarChecked } from "@shared";
export const Rating: FC = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <RatingMui icon={<RateStarChecked />} emptyIcon={<RateStar />} precision={0.5} />
      </StyledEngineProvider>
    </>
  );
};
