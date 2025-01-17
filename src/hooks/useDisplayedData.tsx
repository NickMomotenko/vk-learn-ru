import { useEffect, useState } from "react";

export const useDisplayedData = (data?: any, initialCount = 20) => {
  const [displayCount, setDisplayCount] = useState(initialCount);
  const [displayedData, setDisplayedData] = useState([]);

  //   useEffect(() => {
  //     // При изменении данных обновляем отображаемые данные
  //     loadMoreDisplayedData();
  //   }, [data]);

  useEffect(() => {
    
  }, []);

  const loadMoreDisplayedData = (data) => {
    setDisplayCount((prevCount) => {
      setDisplayedData(data.slice(0, prevCount));

      return prevCount + initialCount;
    });
  };

  const reset = () => {
    setDisplayCount(initialCount);
  };

  return {
    displayCount,
    displayedData,
    loadMoreDisplayedData,
    reset,
  };
};
