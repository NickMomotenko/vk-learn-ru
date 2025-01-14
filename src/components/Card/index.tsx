import { Button } from "../Button";
import styles from "./styles.module.css";

import likeIcon from "../../assets/like.svg";

export const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__bottom}>
        <Button icon={likeIcon} classes="card__button" />
      </div>
    </div>
  );
};
