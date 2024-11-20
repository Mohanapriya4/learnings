import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import { useState,useEffect } from 'react'
import Additem from './Components/Additem';
import Searchitem from './Components/Searchitem';


function App() {
  const API_URL = 'http://localhost:3500/items'
  const [items,setItems]=useState([])

  const [newItem,setNewItem]=useState('')
  const [search,setSearch]=useState('')
  const[fetchError,setFetchError]=useState(null)
  const[isLoading,setIsLoading]=useState(true)

  useEffect(()=>{
    // JSON.parse(localStorage.getItem('Todo_List'))
    const fetchItems = async()=>{
      try{
        const response = await fetch(API_URL)
        // console.log(response);
        if(!response.ok){
          throw Error("Data not received");  
        }
        const listItems = await response.json()
        // console.log(listItems);
        setItems(listItems);
        setFetchError(null)
      }catch(err){
       setFetchError(err.message);
      }finally{
        setIsLoading(false)
      }
    }
    setTimeout(()=>{
      (async()=> await fetchItems())()
    },2000)
    
  },[])

  const addNewItem =(item)=>{
    const id = items.length?items[items.length-1].id + 1 : 1;
    const addItem = {id,checked:false,item}
    const ListAddItem = [...items,addItem]
    setItems(ListAddItem)
    // localStorage.setItem("Todo_List",JSON.stringify(ListAddItem))
  }

  const handleCheckbox=(id)=>{
    const newItemsArray = items.map((itemsparam)=>
    itemsparam.id===id?
    {...itemsparam,checked:!itemsparam.checked}:itemsparam)
    setItems(newItemsArray)
    console.log(id);
    // localStorage.setItem("Todo_List",JSON.stringify(newItemsArray))
  }

  const handleDelete=(id)=>{
    const newDeleteArray = items.filter((itemsparam1)=>(itemsparam1.id!==id))
    setItems(newDeleteArray)
    // localStorage.setItem("Todo_List",JSON.stringify(newDeleteArray))
  }

  const handleDoubleTick=(id)=>{
    const doubleClickTick = items.map((itemsparam2)=>
      (itemsparam2.id===id?{...itemsparam2,checked:!itemsparam2.checked}:itemsparam2))
    setItems(doubleClickTick)
    // localStorage.setItem("Todo_List",JSON.stringify(doubleClickTick))
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!newItem) return;
    console.log(newItem) 
    addNewItem(newItem)
    setNewItem('')
  }
  
  return (
    <div className="App">
     <Header title="Mohanapriya TODO"/>
     <Additem 
     newItem={newItem}
     setNewItem={setNewItem}
     handleSubmit={handleSubmit}
     />
     <Searchitem
     search={search}
     setSearch={setSearch}
     />
     <main>
      {isLoading && <p>Loading the items..</p>}
      {fetchError && <p>{`Error:${fetchError}`}</p>}
        {!isLoading && !fetchError && <Content 
        items={items.filter((item)=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheckbox={handleCheckbox}
        handleDelete={handleDelete}
        handleDoubleTick={handleDoubleTick}
        />}
     </main>
     <Footer
     items={items}
     />
     
    </div>
  );
}

export default App;
