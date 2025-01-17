import { Card } from "../../components/Card";
import { List } from "../../components/List";
import { Button } from "../../components/Button";
import { Loader } from "../../components/Loader";

import { useFetchedData } from "../../hooks/useFetchedData";
import { useLikedCats } from "../../hooks/useLikedCats";

import { CatTypes } from "../../types/types";

import styles from "./styles.module.css";
import { useRenderData } from "../../hooks/useDisplayedData";
import { useEffect } from "react";

export const CatsContainer = () => {
  const { fetchedData, getFetchedData, isLoadingData } = useFetchedData();

  const { addLikedCats, removeLikedCats, likedCats } = useLikedCats();

  const { renderedData, loadMoreData } = useRenderData(
    fetchedData,
    getFetchedData
  );

  useEffect(() => {
    if (fetchedData.length === 0 && !isLoadingData) {
      getFetchedData();
    }
  }, [fetchedData.length, getFetchedData, isLoadingData]);

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
      {!isLoadingData && (
        <div className={styles.cats__upload_block}>
          <Button onClick={loadMoreData} classes={styles.cats__upload}>
            Хотим больше котооооввв...
          </Button>
        </div>
      )}

      <Loader active={isLoadingData} />
    </div>
  );
};
