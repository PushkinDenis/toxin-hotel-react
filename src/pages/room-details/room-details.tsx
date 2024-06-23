import { FC } from "react";
import styles from "./room-details.module.scss";
import { Layout } from "@pages";
import { RoomCard } from "@widgets";
import { Checkbox, CheckboxList, DatePickerDropdown, Dropdown, LabelTemplate, Pagination, Slider, WidgetTitle } from "@shared";

export const RoomDetails: FC = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.photos}>
          <img src={"./pictures/room_1.png"} alt={"photo"} />
          <img src={"./pictures/room_14.png"} alt={"photo"} />
          <img src={"./pictures/room_15.png"} alt={"photo"} />
        </div>
      </main>
    </Layout>
  );
};
