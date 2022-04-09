import {useMemo} from 'react';

export const usePagesArray = (totalPageCount) => {
  const pagesArray = useMemo(() => {
    const arr = [];
    for (let i = 0; i < totalPageCount; i++) {
      arr.push(i + 1);
    }
    return arr;
  }, [totalPageCount])

  return pagesArray;
}