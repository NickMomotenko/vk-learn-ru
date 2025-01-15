import { useState } from "react";
import { getData } from "../api/api";
import { useLocalStorage } from "./useLocalStorage";

export const useFetchedData = () => {
  const [fetchedData, setFetchedData] = useState();
  const [isLoadingData, setIsLoadingData] = useState(false);

  const { data: storagedCats, setData } = useLocalStorage("catsList", []);

  const getFetchedData = async () => {
    setIsLoadingData(true);

    // if (storagedCats.length) {
    //   setFetchedData(storagedCats);
    // } else {

    // }

    let data = await getData();

    if (data) {
      setData(data);
      setFetchedData(data);
    } else {
      alert(
        "Ошибка..скорее всего сервер ушел на покой ). Попробуй включить VPN, возможно что то изменится"
      );
    }

    setIsLoadingData(false);
  };

  return { fetchedData, isLoadingData, getFetchedData };
};
