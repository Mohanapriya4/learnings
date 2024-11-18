import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Additem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='Additem'>Add Item</label>
        <input
        id='Additem'
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
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default Additem