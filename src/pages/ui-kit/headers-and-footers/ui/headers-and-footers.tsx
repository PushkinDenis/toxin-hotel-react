import { FC } from "react";
import { HeadersAndFootersLayout } from "@pages";
import { Header, Footer } from "@widgets";

export const HeadersAndFooters: FC = () => {
  return (
    <HeadersAndFootersLayout>
      <Header isUserAuthorized={false} />
      <Header isUserAuthorized={true} />
      <Footer />
    </HeadersAndFootersLayout>
  );
};
