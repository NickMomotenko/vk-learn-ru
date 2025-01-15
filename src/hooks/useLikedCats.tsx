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
    let searchable = likedCats?.find((like: any) => like?.id === obj?.id);

    if (!searchable) {
      setLikedCats((prevState) => [...prevState, obj]);
      setData((prevState) => [...prevState, obj]);
    }
  };

  const removeLikedCats = (item: CatTypes) => {};

  return { likedCats, addLikedCats };
};
