import { useFetchedData } from "../../hooks/useFetchedData";
import { useEffect } from "react";

import { Card } from "../../components/Card";

import styles from "./styles.module.css";
import { List } from "../../components/List";
import { useLikedCats } from "../../hooks/useLikedCats";

import { useIntersectionObserver } from "react-intersection-observer-hook";
import { CustomSkeleton } from "../../components/Skeleton";
import { Loader } from "../../components/Loader";
import { IntersectionBlock } from "../../components/IntersectionBlock";

export const CatsContainer = () => {
  const { fetchedData, getFetchedData, isLoadingData } = useFetchedData();

  const { addLikedCats } = useLikedCats();

  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  useEffect(() => {
    console.log(`isVisible`, isVisible);

    if (isVisible) {
      getFetchedData();
    }
  }, [isVisible]); // isVisible

  return (
    <div className={styles.cats}>
      <List>
        {fetchedData?.map((cat: any) => (
          <Card
            key={cat?.id}
            tagName="li"
            onLikeClick={() => addLikedCats(cat)}
            {...cat}
          />
        ))}
      </List>
      <CustomSkeleton />

      <IntersectionBlock ref={ref} />

      <Loader active={isLoadingData} />
    </div>
  );
};
