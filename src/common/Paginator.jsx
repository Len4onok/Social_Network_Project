import React, { useState } from 'react';
import s from './Paginator.module.css';

const Paginator = ({ totalCount, countItemsOnPage, requestUsers, setCurrentPage, currentPage, portionSize=10 }) => {
  let pagesCount = Math.ceil(totalCount / countItemsOnPage);
  let pagesArr = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesArr.push(i);
  };

let portionCount=Math.ceil( pagesCount/ portionSize);

const [portionNumber, setPortionNumber]=useState(1);

let leftCorner=(portionNumber-1)*portionSize+1
let rightCorner=portionNumber*portionSize;

  const pageNumElem = pagesArr.filter(p=> p>=leftCorner&& p<=rightCorner)
  .map((p, index) => {
    return <span key={index} onClick={() => {
      requestUsers(countItemsOnPage, p);
      setCurrentPage(p);
    }}
      className={p === currentPage? s.selected:s.unselected}>
      {p}</span>
  });

  return (
    <div>
      {portionNumber>1
      && <button onClick={()=>setPortionNumber(portionNumber-1)}>BACK</button>}
        {pageNumElem}
      {portionNumber<portionCount
      && <button onClick={()=>setPortionNumber(portionNumber+1)}>FORWARD</button>}

    </div>
  );
}

export default Paginator;
