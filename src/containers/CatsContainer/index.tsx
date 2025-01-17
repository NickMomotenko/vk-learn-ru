import { useEffect } from "react";

import { useIntersectionObserver } from "react-intersection-observer-hook";

import { Card } from "../../components/Card";
import { List } from "../../components/List";
import { Button } from "../../components/Button";
import { Loader } from "../../components/Loader";
// import { IntersectionBlock } from "../../components/IntersectionBlock";

import { useFetchedData } from "../../hooks/useFetchedData";
import { useLikedCats } from "../../hooks/useLikedCats";

import { CatTypes } from "../../types/types";

import updateIcon from "../../assets/update.svg";

import styles from "./styles.module.css";
import { useDisplayedData } from "../../hooks/useDisplayedData";

export const CatsContainer = () => {
  const { fetchedData, getFetchedData, clearDataAndFetch, isLoadingData } =
    useFetchedData();

  const { addLikedCats, removeLikedCats, likedCats } = useLikedCats();
  const {
    displayedData,
    displayCount,
    setDisplayedData,
    loadMoreDisplayedData,
  } = useDisplayedData(fetchedData);

  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  useEffect(() => {
    handleClickMore();
  }, []);

  const handleClickMore = async () => {
    if (displayedData.length < fetchedData.length) {
      console.log("local");
      loadMoreDisplayedData();
    } else {
      console.log("api");
      await getFetchedData(); // Загружаем новые данные из API

      loadMoreDisplayedData();
    }
  };

  return (
    <div className={styles.cats}>
      <List>
        {displayedData?.map((cat: any) => {
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
      <Button onClick={handleClickMore}>Давай больше котов</Button>
      {/* <IntersectionBlock ref={ref} /> */}

      <Button
        classes={styles.cats__upload}
        onClick={clearDataAndFetch}
        icon={updateIcon}
      />
      <Loader active={isLoadingData} />
    </div>
  );
};
