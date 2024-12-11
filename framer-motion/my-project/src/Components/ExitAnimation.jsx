import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ExitAnimation = () => {
    const[animationVisible,setAnimationVisible]=useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setAnimationVisible(true)
        },10000)
    })
  return (
    <div>
        <div className='h-32 w-32 rounded-full bg-white mx-auto mt-10'>
        <AnimatePresence>
        {animationVisible === false && ( <motion.div 
        initial={
            {
                opacity:0,
                y:0
            }
        }
        animate={
            {
                opacity:1,
                y:40,
                scale:[null,1,0.5,0.2,1],
                backgroundColor:[null,"#111111","#12ab12","#111111"],
                borderRadius:[null,"40%","60%","10%","100%"]
            }
        }
        transition={{
            duration:10,
            
        }}
        exit={{opacity:0,y:1000}}
        className='h-24 w-24 rounded-full bg-red'></motion.div>) }
        </AnimatePresence>
       
        </div>
        
    </div>
  )
}

export default ExitAnimation