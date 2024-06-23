import { FC } from "react";
import styles from "./registration.module.scss";
import { Layout } from "@pages";
import { SignUpCard } from "@widgets";

export const Registration: FC = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <SignUpCard />
      </main>
    </Layout>
  );
};
