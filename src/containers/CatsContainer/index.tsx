import { useEffect, useState } from "react";

import { Card } from "../../components/Card";
import { List } from "../../components/List";
import { Button } from "../../components/Button";
import { Loader } from "../../components/Loader";

import { useFetchedData } from "../../hooks/useFetchedData";
import { useLikedCats } from "../../hooks/useLikedCats";

import { CatTypes } from "../../types/types";

import updateIcon from "../../assets/update.svg";

import styles from "./styles.module.css";

export const CatsContainer = () => {
  const { fetchedData, getFetchedData, isLoadingData } = useFetchedData();

  const { addLikedCats, removeLikedCats, likedCats } = useLikedCats();

  const [count, setCount] = useState(20);

  const [renderedData, setRenderedData] = useState([]);

  const loadData = () => {
    if (fetchedData.length > 0) {
      // Если данные уже загружены, просто обновляем renderedData
      setRenderedData(fetchedData.slice(0, count));
    } else {
      // Если данных нет, загружаем их с сервера
      getFetchedData();
    }
  };

  useEffect(() => {
    loadData();
  }, [fetchedData]); // Загружаем данные при изменении fetchedData

  useEffect(() => {
    // Обновляем отображаемые данные при изменении count
    setRenderedData(fetchedData.slice(0, count));
  }, [count, fetchedData]); // Обновляем отображаемые данные при изменении count или fetchedData

  const handleMoreClick = () => {
    const newCount = count + 20;
    setCount(newCount);

    // Если мы достигли конца fetchedData, загружаем больше данных
    if (newCount > fetchedData.length) {
      getFetchedData();
    }
  };
  return (
    <div className={styles.cats}>
      <List>
        {renderedData?.map((cat: any) => {
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

      <Button
        classes={styles.cats__upload}
        // onClick={() => {
        //   clearDataAndFetch();
        //   getFetchedData({ callback: loadMoreDisplayedData });
        // }}
        icon={updateIcon}
      />
      <Button onClick={handleMoreClick}>Загрузи еще</Button>
      <Loader active={isLoadingData} />
    </div>
  );
};
