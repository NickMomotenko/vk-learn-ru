import { Card } from "../../components/Card";
import { List } from "../../components/List";
import { useLikedCats } from "../../hooks/useLikedCats";
import styles from "./styles.module.css";

export const LikedCatsContainer = () => {
  const { likedCats, addLikedCats } = useLikedCats();

  return (
    <div className={styles.liked}>
      <List>
        {likedCats?.map((cat: any) => {
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
    </div>
  );
};
