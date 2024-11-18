import React from 'react'
import Items from './Items'
const Content = ({items,handleCheckbox,handleDelete,handleDoubleTick}) => {
  
  
  return (
      <main>
        {(items.length)?(
         <Items
         items={items}
         handleCheckbox={handleCheckbox}
         handleDelete={handleDelete}
         handleDoubleTick={handleDoubleTick}
         />
        ):(
          <p>Your list is empty</p>
        )}
      </main>
  )
}
export default Content
//-----------------------------------------------------------------------------------------
//click events in react:
// import React from 'react'
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
