import React from 'react'

const Content = () => {
    function handleNameChange(){
        const names = ["Earn", "Grow", "Give"]
        const int = Math.floor(Math.random()*3)
        return names[int]
      }
      const handleClick=(name)=>{
       console.log(`Thanks for subscribing ${name}`);
      }

      const handleClick1=(e)=>{
        console.log(e.target.innerHTML);
        
      }
  return (
      <main>
         <p onDoubleClick={()=>handleClick('Priya')}>Lets {handleNameChange()} money</p>
         <button onClick={(e)=>handleClick1(e)}>Subscribe</button>
      </main>
  )
}

export default Content