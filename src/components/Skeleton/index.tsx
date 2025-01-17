import Skeleton from "react-loading-skeleton";

import { List } from "../List";

import "react-loading-skeleton/dist/skeleton.css";

import styles from "./styles.module.css";

export const CustomSkeleton = () => {
  return (
    <List>
      {[...new Array(5)].map((_, ind) => (
        <div key={ind} className={styles.skeleton__item}>
          <Skeleton height={225} />
        </div>
      ))}
    </List>
  );
};
