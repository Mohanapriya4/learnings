import React, { useState } from 'react'
import { motion } from 'framer-motion'

const variant1={
    show:{
      opacity:1
    },
    hide:{
        opacity:0
    }
}

const EmojisAnimation = () => {
    const[showEmojis,setShowEmojis]=useState(false)
  return (
    <div>
        <div className='flex justify-center flex-col items-center space-y-4 mt-10'>
            <motion.div 
            animate={
                showEmojis?"show":"hide"
            }
            variants={variant1}
            className='flex justify-evenly w-64 h-12 bg-white p-4 items-center justify-center rounded-full text-3xl'>
                <motion.span className='bg-transparent'>😆</motion.span>
                <motion.span className='bg-transparent'>💯</motion.span>
                <motion.span className='bg-transparent'>❤️</motion.span>
                <motion.span className='bg-transparent'>😇</motion.span>
                <motion.span className='bg-transparent'>👍</motion.span>
            </motion.div>
            <button className='bg-blue-400 text-white p-3 w-40 rounded-md font-semibold'
            onClick={()=>setShowEmojis(!showEmojis)} 
            >{!showEmojis?"Show Emojis":"Hide Emojis"}</button>
        </div>
    </div>
  )
}

export default EmojisAnimation