import { useEffect, useState } from "react";

export const useRenderData = (
  fetchedData,
  getFetchedData,
  initialCount = 20
) => {
  const [count, setCount] = useState(initialCount);
  const [renderedData, setRenderedData] = useState([]);

  useEffect(() => {
    // Обновляем отображаемые данные при изменении fetchedData или count
    setRenderedData(fetchedData.slice(0, count));
  }, [fetchedData, count]);

  const loadMoreData = () => {
    const newCount = count + 20;
    setCount(newCount);

    // Если мы достигли конца fetchedData, загружаем больше данных
    if (newCount > fetchedData.length) {
      getFetchedData();
    }
  };

  return {
    renderedData,
    loadMoreData,
    count,
  };
};
