import React from 'react'
import { motion } from 'framer-motion'

const GestureButton = () => {
  return (
    <div className='flex justify-center mt-20'>
        <motion.button 
        whileHover={{scale:1.1,backgroundColor:"#123123",color:"#ffffff"}}
        whileTap={{scale:2}}
        className='bg-white p-2 w-44 rounded-full text-gray-800 font-bold  '>Submit
        </motion.button>
    </div>
  )
}

export default GestureButton