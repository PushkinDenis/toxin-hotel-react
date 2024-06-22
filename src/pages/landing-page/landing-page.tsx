import { FC } from "react";
import styles from "./landing-page.module.scss";
import { Layout } from "@pages";
import { FindRoomCard } from "@widgets";

export const LandingPage: FC = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <FindRoomCard />
        <span className={styles.text}>Лучшие номера для вашей работы, отдыха и просто вдохновения</span>
      </main>
    </Layout>
  );
};
