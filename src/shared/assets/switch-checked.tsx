import { FC } from "react";
import { SvgIcon } from "@mui/material";

export const SwitchChecked: FC = () => {
  return (
    <SvgIcon>
      <svg width="40" height="21" viewBox="0 0 40 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="1.05762" width="39" height="19" rx="9.5" fill="white" stroke="#BC9CFF" />
        <rect x="24" y="4.55762" width="12" height="12" rx="6" fill="url(#paint0_linear_0_1)" />
        <defs>
          <linearGradient id="paint0_linear_0_1" x1="30" y1="4.55762" x2="30" y2="16.5576" gradientUnits="userSpaceOnUse">
            <stop stop-color="#BC9CFF" />
            <stop offset="1" stop-color="#8BA4F9" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  );
};
