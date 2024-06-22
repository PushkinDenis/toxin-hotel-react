import { FC } from "react";
import styles from "./landing-page.module.scss";
import { Layout } from "@pages";
import { FindRoomCard } from "@widgets";

type LandingPageProps = {
  isDatePickerActive?: boolean;
};

export const LandingPage: FC<LandingPageProps> = ({ isDatePickerActive }) => {
  return (
    <Layout>
      <main className={styles.main}>
        <FindRoomCard isDatepickerActive={isDatePickerActive} />
        <span className={styles.text}>Лучшие номера для вашей работы, отдыха и просто вдохновения</span>
      </main>
    </Layout>
  );
};
