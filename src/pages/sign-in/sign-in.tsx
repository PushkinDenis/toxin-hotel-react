import { FC } from "react";
import styles from "./sign-in.module.scss";
import { Layout } from "@pages";
import { LogInCard } from "@widgets";

export const SignIn: FC = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <LogInCard />
      </main>
    </Layout>
  );
};
