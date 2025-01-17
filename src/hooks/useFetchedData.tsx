import { useState } from "react";
import { getData } from "../api/api";
import { CatTypes } from "../types/types";
import { useLocalStorage } from "./useLocalStorage";

export const useFetchedData = () => {
  const [fetchedData, setFetchedData] = useLocalStorage("catsData", []);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
  const defaultLoadCount = 20;

  const getFetchedData = async (loadCount = defaultLoadCount) => {
    setIsLoadingData(true);

    try {
      let data = await getData(loadCount);

      if (!data) {
        alert(
          "Ошибка..скорее всего сервер ушел на покой ). Попробуй включить VPN, возможно что-то изменится"
        );
        return;
      }

      const existingIds = fetchedData.map((item: CatTypes) => item.id);
      const uniqueCatData = data.filter(
        (item: CatTypes) => !existingIds.includes(item.id)
      );

      const remainingLoadCount = defaultLoadCount - uniqueCatData.length;

      if (remainingLoadCount > 0) {
        const additionalData = await getData(remainingLoadCount);
        const additionalUniqueData = additionalData?.filter(
          (item: CatTypes) => !existingIds.includes(item.id)
        );

        setFetchedData((prevData: any) => {
          let updatedData = [
            ...prevData,
            ...uniqueCatData,
            ...(additionalUniqueData || []),
          ];
          return updatedData;
        });
      } else {
        setFetchedData((prevData: any) => {
          let updatedData = [...prevData, ...uniqueCatData];
          return updatedData;
        });
      }
    } catch (error) {
      alert("Произошла ошибка при загрузке данных.");
    } finally {
      setIsLoadingData(false);
    }
  };

  const clearDataAndFetch = async () => {
    setFetchedData([]); // Очищаем данные
  };

  return { fetchedData, isLoadingData, getFetchedData, clearDataAndFetch };
};
