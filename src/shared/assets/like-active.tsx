import { FC } from "react";
import { SvgIcon } from "@mui/material";

type LikeActiveProps = {
  className: string;
};

export const LikeActive: FC<LikeActiveProps> = ({ className }) => {
  return (
    <SvgIcon className={className}>
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.93026 7.88672L4.3248 7.33984C3.63469 6.71484 3.13339 6.2526 2.82089 5.95312C2.50839 5.65365 2.15683 5.28255 1.7662 4.83984C1.3886 4.39714 1.12818 4 0.984952 3.64844C0.841723 3.28385 0.770108 2.91276 0.770108 2.53516C0.770108 1.89714 0.984952 1.35677 1.41464 0.914062C1.85735 0.471354 2.40422 0.25 3.05526 0.25C3.81047 0.25 4.43547 0.542969 4.93026 1.12891C5.42506 0.542969 6.05006 0.25 6.80526 0.25C7.45631 0.25 7.99667 0.471354 8.42636 0.914062C8.86907 1.35677 9.09042 1.89714 9.09042 2.53516C9.09042 3.04297 8.92115 3.57031 8.58261 4.11719C8.24407 4.66406 7.87297 5.13932 7.46933 5.54297C7.0787 5.94661 6.43417 6.55208 5.53573 7.35938L4.93026 7.88672Z"
          fill="url(#paint0_linear_18447_118)"
        />
        <defs>
          <linearGradient id="paint0_linear_18447_118" x1="4.93026" y1="-6" x2="4.93026" y2="14" gradientUnits="userSpaceOnUse">
            <stop stop-color="#BC9CFF" />
            <stop offset="1" stop-color="#8BA4F9" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  );
};
