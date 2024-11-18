import React from 'react'
import List from './List';

const Items = ({items,handleCheckbox,handleDelete,handleDoubleTick}) => {
  return (
    <ul>
         {items.map((items1)=>(
           <List
                items1={items1}
                key={items1.id}
                handleCheckbox={handleCheckbox}
                handleDelete={handleDelete}
                handleDoubleTick={handleDoubleTick}
           />
         ))}
         </ul>
  )
}

export default Items