import { FC } from "react";
import styles from "./review.module.scss";
import { Button } from "@shared";

type ReviewProps = {
  textLikeButton: string;
  review: string;
  img: string;
  userName: string;
  userLastLogin: string;
  isLiked?: boolean;
};

export const Review: FC<ReviewProps> = ({ review, img, textLikeButton, userName, userLastLogin, isLiked }) => {
  return (
    <div className={styles.wrapper}>
      <img src={img} className={styles.user_img}></img>
      <div className={styles.user}>
        <div className={styles.user_name}>{userName}</div>
        <div className={styles.user_last_login}>{userLastLogin}</div>
      </div>
      <Button variant="like" text={textLikeButton} isClicked={isLiked} />
      <div className={styles.user_review}>{review}</div>
    </div>
  );
};
