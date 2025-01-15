import { useFetchedData } from "../../hooks/useFetchedData";
import { useEffect } from "react";

import { Card } from "../../components/Card";

import styles from "./styles.module.css";
import { List } from "../../components/List";
import { useLikedCats } from "../../hooks/useLikedCats";
import { Button } from "../../components/Button";

export const CatsContainer = () => {
  const { fetchedData, getFetchedData } = useFetchedData();

  const { addLikedCats } = useLikedCats();

  useEffect(() => {
    getFetchedData();
  }, []);

  console.log(fetchedData);

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
      <Button>Больше котов , большеееееее</Button>
    </div>
  );
};
