import { FC } from "react";
import styles from "./room-details.module.scss";
import { Layout } from "@pages";
import { BillCard, Review } from "@widgets";
import { BulletList, Feature, WidgetTitle } from "@shared";

export const RoomDetails: FC = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.photos}>
          <img src={"./pictures/room_1.png"} alt={"photo"} />
          <img src={"./pictures/room_14.png"} alt={"photo"} />
          <img src={"./pictures/room_15.png"} alt={"photo"} />
        </div>
        <div className={styles.information}>
          <div className={styles.information_wrapper}>
            <div className={styles.information_description}>
              <div className={styles.information_about}>
                <WidgetTitle text={"Сведения о номере"} />
                <Feature img={"./icons/insert_emoticon.svg"} text={"Комфорт"} description={"Шумопоглощающие стены"} />
                <Feature img={"./icons/location_city.svg"} text={"Удобство"} description={"Окно в каждой из спален"} />
                <Feature img={"./icons/whatshot.svg"} text={"Уют"} description={"Номер оснащён камином"} />
              </div>
              <div className={styles.information_chart}>
                <WidgetTitle text={"Впечатления от номера"} />
                <img src={"./icons/chart.svg"} alt={"chart"} />
              </div>
            </div>
            <div className={styles.information_review}>
              <div className={styles.information_review_wrapper}>
                <WidgetTitle text={"Отзывы посетителей номера"} />
                <span>2 отзыва</span>
              </div>
              <Review
                review={"Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей."}
                img={"./pictures/user_1.png"}
                textLikeButton={"12"}
                userName={"Мурад Сарафанов"}
                userLastLogin={"5 дней назад"}
              />
              <Review review={"Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент"} img={"./pictures/user_2.png"} textLikeButton={"2"} userName={"Патрисия Стёклышкова"} userLastLogin={"Неделю назад"} />
            </div>
            <div className={styles.information_rules}>
              <div className={styles.information_list}>
                <WidgetTitle text={"Правила"} />
                <BulletList text={["Нельзя с питомцами", "Без вечеринок и мероприятий", "Время прибытия — после 13:00, а выезд до 12:00"]} />
              </div>
              <div className={styles.information_cancel}>
                <WidgetTitle text={"Отмена"} />
                <span>Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.</span>
              </div>
            </div>
          </div>
          <BillCard />
        </div>
      </main>
    </Layout>
  );
};
