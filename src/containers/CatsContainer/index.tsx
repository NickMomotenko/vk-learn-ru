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
import { CatTypes } from "../../types/types";

export const CatsContainer = () => {
  const { fetchedData, getFetchedData, isLoadingData } = useFetchedData();

  const { addLikedCats, likedCats } = useLikedCats();

  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  useEffect(() => {
    if (isVisible) {
      getFetchedData();
    }
  }, [isVisible]);

  return (
    <div className={styles.cats}>
      <List>
        {fetchedData?.map((cat: any) => {
          let isLiked: boolean = likedCats?.find(
            (likedItem: CatTypes) => likedItem?.id === cat?.id
          );

          return (
            <Card
              key={cat?.id}
              tagName="li"
              onLikeClick={() => addLikedCats(cat)}
              isLiked={isLiked ? true : false}
              {...cat}
            />
          );
        })}
      </List>
      <CustomSkeleton />

      <IntersectionBlock ref={ref} />

      <Loader active={isLoadingData} />
    </div>
  );
};
