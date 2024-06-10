import { FC } from "react";
import { SvgIcon } from "@mui/material";

export const RadioIcon: FC = () => {
  return (
    <SvgIcon sx={{ width: "20px", height: "20px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="white" stroke="#C7C7CF" />
      </svg>
    </SvgIcon>
  );
};
