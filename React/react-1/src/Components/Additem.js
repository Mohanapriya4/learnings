import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const Additem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='Additem'>Add Item</label>
        <input
        id='Additem'
        ref={inputRef}
        type='text'
        placeholder='Add Item'
        required
        autoFocus
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        />
        <button
        type='submit'
        aria-label='Add Item'
        onClick={()=>inputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default Additem