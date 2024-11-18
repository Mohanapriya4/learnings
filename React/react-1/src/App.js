import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import { useState } from 'react'


function App() {
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
  const handleDelete=(id)=>{
    const newDeleteArray = items.filter((itemsparam1)=>(itemsparam1.id!==id))
    setItems(newDeleteArray)
  }
  const handleDoubleTick=(id)=>{
    const doubleClickTick = items.map((itemsparam2)=>
      (itemsparam2.id===id?{...itemsparam2,checked:!itemsparam2.checked}:itemsparam2))
    setItems(doubleClickTick)
  }
  
  return (
    <div className="App">
     <Header title="Mohanapriya TODO"/>
     <Content 
     items={items}
     handleCheckbox={handleCheckbox}
     handleDelete={handleDelete}
     handleDoubleTick={handleDoubleTick}
     />
     <Footer
     items={items}
     />
     
    </div>
  );
}

export default App;
