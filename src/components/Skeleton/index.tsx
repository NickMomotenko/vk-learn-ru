import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./styles.module.css";

export const CustomSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      {[...new Array(5)].map((_, ind) => (
        <div key={ind} className={styles.skeleton__item}>
          <Skeleton height={225} />
        </div>
      ))}
    </div>
  );
};
