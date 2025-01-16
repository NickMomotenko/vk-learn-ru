import { useState } from "react";
import { getData } from "../api/api";
import { CatTypes } from "../types/types";

export const useFetchedData = () => {
  const [fetchedData, setFetchedData] = useState<CatTypes[] | []>([]);
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

        setFetchedData((prevData) => [
          ...prevData,
          ...uniqueCatData,
          ...(additionalUniqueData || []),
        ]);
      } else {
        setFetchedData((prevData) => [...prevData, ...uniqueCatData]);
      }
    } catch (error) {
      alert("Произошла ошибка при загрузке данных.");
    } finally {
      setIsLoadingData(false);
    }
  };

  return { fetchedData, isLoadingData, getFetchedData };
};
