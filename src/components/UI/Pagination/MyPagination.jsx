import React from 'react';
import { usePagesArray } from '../../../hooks/usePagesArray';
import MyButton from '../Button/MyButton';
import classes from './MyPagination.module.css';

const MyPagination = ({totalPageCount, page, setPage}) => {
  const pagesArray = usePagesArray(totalPageCount);
  return (
    <div className={classes.pagination}>
    {pagesArray.map(p =>
      <MyButton
        onClick={() => setPage(p)}
        key={p} 
        disabled={p === page}>
        {p}
      </MyButton>
    )}
  </div>
  );
};

export default MyPagination;