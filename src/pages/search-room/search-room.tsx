import { FC } from "react";
import styles from "./search-room.module.scss";
import { Layout } from "@pages";
import { RoomCard } from "@widgets";
import { Checkbox, CheckboxList, DatePickerDropdown, Dropdown, LabelTemplate, Pagination, Slider, WidgetTitle } from "@shared";

type SearchRoomProps = {
  isDatePickerActive?: boolean;
  defaultDate?: Date;
  defaultValue?: [Date | null, Date | null];
  isDropdownActive?: boolean;
  dropdownValues?: number[];
};

export const SearchRoom: FC<SearchRoomProps> = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.filters}>
          <LabelTemplate label={"даты пребывания в отеле"}>
            <DatePickerDropdown type={"date-wide"} />
          </LabelTemplate>
          <LabelTemplate label={"гости"}>
            <Dropdown items={["ВЗРОСЛЫЕ", "ДЕТИ", "МЛАДЕНЦЫ"]} values={[2, 1, 1]} type={"small"} />
          </LabelTemplate>
          <Slider label={"диапазон цены"} />
          <LabelTemplate label={"правила дома"}>
            <Checkbox label="Можно курить" />
            <Checkbox label="Можно с питомцами" isChecked={true} />
            <Checkbox label="Можно пригласить гостей (до 10 человек)" isChecked={true} />
          </LabelTemplate>
          <LabelTemplate label={"доступность"}>
            <Checkbox label="Помощник для инвалидов" type="rich" description="На 1 этаже вас встретит специалист и проводит до номера." />
            <Checkbox label="Помощник для инвалидов" type="rich" description="На 1 этаже вас встретит специалист и проводит до номера." />
          </LabelTemplate>
          <LabelTemplate label={"доступность"}>
            <Dropdown items={["СПАЛЬНИ", "КРОВАТИ", "ВАННЫЕ КОМНАТЫ"]} values={[2, 2, 0]} />
          </LabelTemplate>
          <CheckboxList labelText={"дополнительные удобства"} text={["Завтрак", "Письменный стол", "Стул для кормления", "Кроватка", "Телевизор", "Шампунь"]} />
        </div>
        <div className={styles.rooms}>
          <WidgetTitle text={"Номера, которые мы для вас подобрали"} />
          <div className={styles.rooms_list}>
            <RoomCard roomNumber={"№ 888"} roomType={"люкс"} price={"9 990₽ "} feedbackNumber={"145"} image={"./pictures/room_1.png"} rating={5} type={"photos"} />
            <RoomCard roomNumber={"№ 840"} roomType={""} price={"9 990₽ "} feedbackNumber={"65"} image={"./pictures/room_2.png"} rating={5} />
            <RoomCard roomNumber={"№ 980"} roomType={"люкс"} price={"8 500₽ "} feedbackNumber={"35"} image={"./pictures/room_4.png"} rating={3} />
            <RoomCard roomNumber={"№ 856"} roomType={""} price={"7 300₽ "} feedbackNumber={"19"} image={"./pictures/room_5.png"} rating={5} />
            <RoomCard roomNumber={"№ 740"} roomType={""} price={"6 000₽ "} feedbackNumber={"44"} image={"./pictures/room_6.png"} rating={4} />
            <RoomCard roomNumber={"№ 982"} roomType={""} price={"5 800₽ "} feedbackNumber={"56"} image={"./pictures/room_7.png"} rating={3} />
            <RoomCard roomNumber={"№ 678"} roomType={""} price={"5 500₽ "} feedbackNumber={"45"} image={"./pictures/room_8.png"} rating={5} />
            <RoomCard roomNumber={"№ 450"} roomType={""} price={"5 300₽ "} feedbackNumber={"39"} image={"./pictures/room_9.png"} rating={4} />
            <RoomCard roomNumber={"№ 350"} roomType={""} price={"5 000₽ "} feedbackNumber={"77"} image={"./pictures/room_10.png"} rating={3} />
            <RoomCard roomNumber={"№ 666"} roomType={""} price={"5 000₽ "} feedbackNumber={"25"} image={"./pictures/room_11.png"} rating={5} />
            <RoomCard roomNumber={"№ 444"} roomType={""} price={"5 000₽ "} feedbackNumber={"15"} image={"./pictures/room_12.png"} rating={3} />
            <RoomCard roomNumber={"№ 352"} roomType={""} price={"5 000₽ "} feedbackNumber={"55"} image={"./pictures/room_13.png"} rating={3} />
          </div>
          <Pagination text={"1 – 12 из 100+ вариантов аренды"} />
        </div>
      </main>
    </Layout>
  );
};
