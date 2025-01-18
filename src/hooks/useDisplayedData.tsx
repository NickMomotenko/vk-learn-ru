import { useEffect, useState } from "react";
import { CatTypes } from "../types/types";

export const useRenderData = (
  fetchedData: CatTypes[],
  getFetchedData?: () => void,
  initialCount = 20
) => {
  const [count, setCount] = useState(initialCount);
  const [renderedData, setRenderedData] = useState([]);

  useEffect(() => {
    setRenderedData(fetchedData.slice(0, count));
  }, [fetchedData, count]);

  const loadMoreData = () => {
    const newCount = count + initialCount;
    setCount(newCount);

    if (newCount > fetchedData.length) {
      getFetchedData && getFetchedData();
    }
  };

  return {
    renderedData,
    loadMoreData,
    count,
  };
};
