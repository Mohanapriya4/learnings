import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import { useState,useEffect } from 'react'
import Additem from './Components/Additem';
import Searchitem from './Components/Searchitem';
import apiRequest from './Components/Apirequest';


function App() {
  const API_URL = 'http://localhost:3502/items'
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

  const addNewItem = async(item)=>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addItem = {id,checked:false,item}
    const ListAddItem = [...items,addItem]
    setItems(ListAddItem)
    // localStorage.setItem("Todo_List",JSON.stringify(ListAddItem))

    const postOption = {
      method : 'POST',
      headers : {
        'Content-Type':'application/json'
      },
      body : JSON.stringify(addItem)
    }

    const result = await apiRequest(API_URL,postOption)
    if(result) setFetchError(result)
  }

  const handleCheckbox= async(id)=>{
    
    const newItemsArray = items.map((itemsparam)=>
    itemsparam.id===id?
    {...itemsparam,checked:!itemsparam.checked}:itemsparam)
    setItems(newItemsArray)
    console.log(id);
    // localStorage.setItem("Todo_List",JSON.stringify(newItemsArray))

    const myItem = newItemsArray.filter((item)=>item.id===id)
    const updateOption = {
      method : 'PATCH',
      headers : {
        'Content-Type':'application/json'
      },
      body : JSON.stringify({checked:myItem[0].checked}) 
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl,updateOption)
    if(result) setFetchError(result)
  }

  const handleDelete= async (id)=>{
    const newDeleteArray = items.filter((itemsparam1)=>(itemsparam1.id!==id))
    setItems(newDeleteArray)
    // localStorage.setItem("Todo_List",JSON.stringify(newDeleteArray))
    const deleteOption = {method:'DELETE'}
   
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl,deleteOption)
    if(result) setFetchError(result)
  
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
     <Header title="TODO LIST"/>
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
