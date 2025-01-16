import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { CatTypes } from "../types/types";

export const useLikedCats = () => {
  const [likedCats, setLikedCats] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false);

  const { data: storagedCats, setData } = useLocalStorage("likedCats", []);

  useEffect(() => {
    getLikedCats();
  }, []);

  const getLikedCats = () => {
    if (storagedCats.length) {
      setLikedCats(storagedCats);
    }
  };

  const addLikedCats = (obj: CatTypes) => {

    let searchable = likedCats?.find((like: CatTypes) => like?.id === obj?.id);

    if (!searchable) {
      setLikedCats((prevState: any) => [...prevState, obj]);
      setData((prevState: CatTypes[]) => [...prevState, obj]);
    }
  };

  const removeLikedCats = (id: CatTypes) => {
    let removed = likedCats?.find((removedItem) => removedItem?.id === id);

    const updateLikedCats = likedCats?.filter(
      (filteredItem) => filteredItem?.id !== removed?.id
    );

    setLikedCats([...updateLikedCats]);
    setData([...updateLikedCats]);
  };

  return { likedCats, addLikedCats, removeLikedCats };
};
