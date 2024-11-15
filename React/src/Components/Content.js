import React from 'react'

const Content = () => {
    function handleNameChange(){
        const names = ["Earn", "Grow", "Give"]
        const int = Math.floor(Math.random()*3)
        return names[int]
      }
  return (
    <div>
         <p>Lets {handleNameChange()} money</p>
    </div>
  )
}

export default Content