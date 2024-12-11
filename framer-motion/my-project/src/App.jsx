import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './Components/ProgressBar'
import ExitAnimation from './Components/ExitAnimation'
import GestureButton from './Components/GestureButton'
import Draggable from './Components/Draggable'
import EmojisAnimation from './Components/EmojisAnimation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-10 flex flex-col'>
        <h1 className="text-center text-4xl font-semibold">
          Framer motion components
        </h1>
        {/* <ProgressBar /> */}
        {/* <ExitAnimation />
        <GestureButton /> */}
        {/* <Draggable /> */}
        <EmojisAnimation />
    </div>
    </>
  )
}

export default App
