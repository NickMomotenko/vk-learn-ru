import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { List } from "../List";

import styles from "./styles.module.css";
import useWindowSize from "../../hooks/useWindowResize";
import { useEffect, useState } from "react";

export const CustomSkeleton = () => {
  const [itemCounter, setItemCounter] = useState(5);

  // const { width } = useWindowSize();

  // useEffect(() => {
  //   if (width === 940) {
  //     setItemCounter(4);
  //   }

  //   if (width === 768) {
  //     setItemCounter(3);
  //   }

  //   if (width === 600) {
  //     setItemCounter(2);
  //   }

  //   if (width === 380) {
  //     setItemCounter(1);
  //   }
  // }, [width]);

  return (
    <List>
      {[...new Array(itemCounter)].map((_, ind) => (
        <div key={ind} className={styles.skeleton__item}>
          <Skeleton height={225} />
        </div>
      ))}
    </List>
  );
};
