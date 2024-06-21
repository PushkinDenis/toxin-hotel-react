import { FC } from "react";
import { HeadersAndFootersLayout } from "@pages";
import { Header } from "@widgets";

export const HeadersAndFooters: FC = () => {
  return (
    <HeadersAndFootersLayout>
      <Header isUserAuthorized={false} />
      <Header isUserAuthorized={true} />
    </HeadersAndFootersLayout>
  );
};
