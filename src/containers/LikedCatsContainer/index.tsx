import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { List } from "../../components/List";

import { useRenderData } from "../../hooks/useDisplayedData";
import { useLikedCats } from "../../hooks/useLikedCats";

import { CatTypes } from "../../types/types";

import styles from "./styles.module.css";
import catsStyles from "../CatsContainer/styles.module.css";

export const LikedCatsContainer = () => {
  const { likedCats, addLikedCats, removeLikedCats } = useLikedCats();

  const { renderedData, loadMoreData } = useRenderData(likedCats);

  return (
    <div className={styles.liked}>
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
      {likedCats.length > 20 && likedCats.length > renderedData.length && (
        <div className={catsStyles.cats__upload_block}>
          <Button onClick={loadMoreData} classes={catsStyles.cats__upload}>
            Хотим больше котооооввв...
          </Button>
        </div>
      )}
    </div>
  );
};
