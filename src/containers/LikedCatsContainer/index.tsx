import { Card } from "../../components/Card";
import { List } from "../../components/List";
import { useLikedCats } from "../../hooks/useLikedCats";
import styles from "./styles.module.css";

export const LikedCatsContainer = () => {
  const { likedCats, addLikedCats } = useLikedCats();

  return (
    <div className={styles.liked}>
      <List>
        {likedCats?.map((cat: any) => (
          <Card
            key={cat?.id}
            tagName="li"
            onLikeClick={() => addLikedCats(cat)}
            {...cat}
          />
        ))}
      </List>
    </div>
  );
};
