import { useEffect, useState } from "react";

export const useDisplayedData = (data: any = [], initialCount = 20) => {
  const [displayCount, setDisplayCount] = useState(initialCount);
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    console.log("первый");
    setDisplayedData(data?.slice(0, initialCount) || []);
  }, []);

  useEffect(() => {
    console.log('сюда');
    if (data.length === initialCount || data.length === 0) {
      setDisplayedData(data?.slice(0, initialCount) || []);
    } else {
      console.log('сюда');
      
      setDisplayCount((prevCount) => {
        setDisplayedData(data?.slice(0, prevCount + initialCount) || []);

        return prevCount + initialCount;
      });
    }
  }, [data]);

  const loadMoreDisplayedData = () => {
    // if (data.length === initialCount || data.length === 0) {
    //   setDisplayedData(data?.slice(0, initialCount) || []);
    // } else {
    //   setDisplayCount((prevCount) => {
    //     setDisplayedData(data?.slice(0, prevCount + initialCount) || []);

    //     return prevCount + initialCount;
    //   });
    // }
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
