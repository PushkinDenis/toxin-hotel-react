import { FC } from "react";
import styles from "./landing-page.module.scss";
import { Layout } from "@pages";
import { FindRoomCard } from "@widgets";
import clsx from "clsx";

type LandingPageProps = {
  isDatePickerActive?: boolean;
  defaultDate?: Date;
  defaultValue?: [Date | null, Date | null];
  isDropdownActive?: boolean;
  dropdownValues?: number[];
};

export const LandingPage: FC<LandingPageProps> = ({ isDropdownActive, dropdownValues, isDatePickerActive, defaultDate, defaultValue }) => {
  return (
    <Layout>
      <main className={!defaultValue ? styles.main : clsx(styles.main, styles.main_datepicker_active)}>
        <FindRoomCard isDatepickerActive={isDatePickerActive} defaultValue={defaultValue} defaultDate={defaultDate} isDropdownActive={isDropdownActive} dropdownValues={dropdownValues} />
        <span className={styles.text}>Лучшие номера для вашей работы, отдыха и просто вдохновения</span>
      </main>
    </Layout>
  );
};
