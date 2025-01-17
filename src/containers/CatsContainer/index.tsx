import { useEffect } from "react";

import { useIntersectionObserver } from "react-intersection-observer-hook";

import { Card } from "../../components/Card";
import { List } from "../../components/List";
import { Button } from "../../components/Button";
import { Loader } from "../../components/Loader";
import { IntersectionBlock } from "../../components/IntersectionBlock";

import { useFetchedData } from "../../hooks/useFetchedData";
import { useLikedCats } from "../../hooks/useLikedCats";

import { CatTypes } from "../../types/types";

import updateIcon from "../../assets/update.svg";

import styles from "./styles.module.css";

export const CatsContainer = () => {
  const { fetchedData, getFetchedData, clearDataAndFetch, isLoadingData } =
    useFetchedData();

  const { addLikedCats, removeLikedCats, likedCats } = useLikedCats();

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
          let isLiked: boolean = likedCats?.some(
            (likedItem: CatTypes) => likedItem?.id === cat?.id
          );

          return (
            <Card
              key={cat?.id}
              tagName="li"
              onLikeClick={
                !isLiked
                  ? () => addLikedCats(cat)
                  : () => removeLikedCats(cat?.id)
              }
              isLiked={isLiked}
              {...cat}
            />
          );
        })}
      </List>
      <IntersectionBlock ref={ref} />

      <Button
        classes={styles.cats__upload}
        onClick={clearDataAndFetch}
        icon={updateIcon}
      />
      <Loader active={isLoadingData} />
    </div>
  );
};
