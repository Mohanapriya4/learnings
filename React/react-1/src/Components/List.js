import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';


const List = ({items1,handleCheckbox,handleDelete,handleDoubleTick}) => {
  return (
    <li className="item" key={items1.id}>
             <input 
             type="checkbox"
             onChange={()=>handleCheckbox(items1.id)}
             checked={items1.checked}
             />
             <label 
             onDoubleClick={()=>handleDoubleTick(items1.id)}
             style={(items1.checked)?{textDecoration:'line-through'}:null}
             >
               {items1.item}
             </label>
             <FaTrashAlt 
             role='button'
             tabIndex={0}
             onClick={()=>handleDelete(items1.id)}
             />
           </li>
  )
}

export default List