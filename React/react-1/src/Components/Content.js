import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
const Content = () => {
  const [items,setItems]=useState(
    [
      {
        id:1,
        checked:true,
        item:"Playing cricket"
      },
      {
        id:2,
        checked:false,
        item:"Playing chess"
      },
      {
        id:3,
        checked:false,
        item:"Playing tabletennis"
      }
    ]
  )
  const handleCheckbox=(id)=>{
    const newItemsArray = items.map((itemsparam)=>
    itemsparam.id===id?
    {...itemsparam,checked:!itemsparam.checked}:itemsparam)
    setItems(newItemsArray)
    console.log(id);
  }
  
  return (
      <main>
        <ul>
        {items.map((items1)=>(
          <li className="item" key={items1.id}>
            <input 
            type="checkbox"
            onChange={()=>handleCheckbox(items1.id)}
            checked={items1.checked}
            />
            <label>{items1.item}</label>
            <FaTrashAlt 
            role='button'
            tabIndex={0}
            />
          </li>
        ))}
        </ul>
        
      </main>
  )
}
export default Content
//-----------------------------------------------------------------------------------------
//click events in react:
// import React from 'react'
// import { useState } from 'react'
// const Content = () => {
//   function handleNameChange(){
//       const names = ["Earn", "Grow", "Give"]
//       const int = Math.floor(Math.random()*3)
//       return names[int]
//     }
//     const handleClick=(name)=>{
//      console.log(`Thanks for subscribing ${name}`);
//     }
//     const handleClick1=(e)=>{
//       console.log(e.target.innerHTML);     
//     }
// return (
//     <main>
//        <p onDoubleClick={()=>handleClick('Priya')}>Lets {handleNameChange()} money</p>
//        <button onClick={(e)=>handleClick1(e)}>Subscribe</button>
//     </main>
// )
// }
// export default Content
//-----------------------------------------------------------------------------------------
//UseState example-1:
// import React from 'react'
// import { useState } from 'react'
// const Content = () => {
//   const [count,setCount]= useState(99)
//     function handleIncrement(){
//       setCount((count)=>count+1)
//     }
//     function handleDecrement(){
//       setCount((count)=>count-1)
//     }
//   return (
//       <main>
//          <button onClick={handleIncrement}>+</button>
//          <p>{count}</p>
//          <button onClick={handleDecrement}>-</button>
//       </main>
//   )
// }
// export default Content
//----------------------------------------------------------------------------------------
//UseState example-2
// import React from 'react'
// import { useState } from 'react'
// const Content = () => {
//   const[name,setName]=useState("Earn")
//   function handleNameChange(){
//     const nameContent = ["Earn","Grow", "Give"]
//     const int = Math.floor(Math.random()*3)
//     setName(nameContent[int])
//   }
//   return (
//       <main>
//         <p>Let's {name} Money</p>
//         <button onClick={handleNameChange}>Subscribe</button>      
//       </main>
//   )
// }
// export default Content
