import { Button } from "../Button";

import { CatTypes } from "../../types/types";

import styles from "./styles.module.css";

import likeIcon from "../../assets/like.svg";

interface CatProps extends CatTypes {
  tagName?: string | any;
  onLikeClick?: () => {};
  isLiked?: boolean;
}

export const Card: React.FC<CatProps> = ({
  url,
  tagName,
  onLikeClick,
  isLiked,
}) => {
  const RootTag = tagName ? tagName : "div";

  return (
    <RootTag className={`${styles.card} ${isLiked ? styles.card__liked : ""}`}>
      <img src={url} alt="" className={styles.card__image} loading="lazy" />
      <div className={styles.card__bottom}>
        <Button
          icon={likeIcon}
          classes={styles.card__button}
          onClick={onLikeClick}
        />
      </div>
    </RootTag>
  );
};
