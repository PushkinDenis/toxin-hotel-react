import { FC } from "react";
import { SvgIcon } from "@mui/material";

export const RadioChecked: FC = () => {
  return (
    <SvgIcon sx={{ width: "20px", height: "20px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="white" stroke="#BC9CFF" />
        <rect x="4" y="4" width="12" height="12" rx="6" fill="url(#paint0_linear_1_289)" />
        <defs>
          <linearGradient id="paint0_linear_1_289" x1="10" y1="4" x2="10" y2="16" gradientUnits="userSpaceOnUse">
            <stop stop-color="#BC9CFF" />
            <stop offset="1" stop-color="#8BA4F9" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  );
};
