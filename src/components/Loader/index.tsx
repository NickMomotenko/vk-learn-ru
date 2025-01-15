import styles from "./styles.module.css";

import loaderIcon from "../../assets/astronaut.png";

type LoaderProps = {
  active?: boolean;
};

export const Loader: React.FC<LoaderProps> = ({ active }) => {
  return (
    <div className={`${styles.loader} ${active ? styles.active : ""}`}>
      <div className={styles.loader__content}>
        <img
          src={loaderIcon}
          alt="loader with cat"
          className={styles.loader__icon}
        />
        <span className={styles.loader__text}>Загружаю котов ...</span>
      </div>
    </div>
  );
};
