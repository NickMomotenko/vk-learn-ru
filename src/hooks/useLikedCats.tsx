import { useEffect, useState } from "react";

import { useLocalStorage } from "./useLocalStorage";

import { CatTypes } from "../types/types";

export const useLikedCats = () => {
  const [likedCats, setLikedCats] = useState<CatTypes[] | []>([]);
  // const [isLoadingData, setIsLoadingData] = useState<boolean>(false);

  const [storagedCats, setData] = useLocalStorage("likedCats", []);

  useEffect(() => {
    getLikedCats();
  }, []);

  const getLikedCats = () => {
    if (storagedCats?.length) {
      setLikedCats(storagedCats);
    }
  };

  const addLikedCats = (obj: CatTypes) => {
    let searchable = likedCats?.find((like: CatTypes) => like?.id === obj?.id);

    if (!searchable) {
      setLikedCats((prevState) => [...prevState, obj]);
      setData((prevState: CatTypes[]) => [...prevState, obj]);
    }
  };

  const removeLikedCats = (id: CatTypes) => {
    let removed = likedCats?.find(
      (removedItem: CatTypes | any) => removedItem?.id === id
    );

    const updateLikedCats = likedCats?.filter(
      (filteredItem) => filteredItem?.id !== removed?.id
    );

    setLikedCats([...updateLikedCats]);
    setData([...updateLikedCats]);
  };

  return { likedCats, addLikedCats, removeLikedCats };
};
