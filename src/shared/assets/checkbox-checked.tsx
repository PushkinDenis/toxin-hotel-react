import { FC } from "react";
import { SvgIcon } from "@mui/material";

export const CheckboxChecked: FC = () => {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="0.5" y="0.615234" width="19" height="19" rx="3.5" fill="white" stroke="#BC9CFF" />
        <path d="M6.46439 8.40768L10.707 12.6503L9.29282 14.0645L5.05018 9.82189L6.46439 8.40768Z" fill="url(#paint0_linear_18443_14)" />
        <path d="M13.5355 6.99347L14.9497 8.40768L9.29282 14.0645L7.8786 12.6503L13.5355 6.99347Z" fill="url(#paint1_linear_18443_14)" />
        <defs>
          <linearGradient id="paint0_linear_18443_14" x1="12.8284" y1="6.28636" x2="7.1715" y2="11.9432" gradientUnits="userSpaceOnUse">
            <stop stop-color="#BC9CFF" />
            <stop offset="1" stop-color="#8BA4F9" />
          </linearGradient>
          <linearGradient id="paint1_linear_18443_14" x1="12.8284" y1="6.28636" x2="7.1715" y2="11.9432" gradientUnits="userSpaceOnUse">
            <stop stop-color="#BC9CFF" />
            <stop offset="1" stop-color="#8BA4F9" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  );
};
