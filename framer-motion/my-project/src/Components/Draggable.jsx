import React from 'react'
import { motion } from 'framer-motion'

const Draggable = () => {
  return (
    <motion.div 
    drag
    whileDrag={{scale:1.2,backgroundColor:"lemonchiffon"}}
    dragConstraints={{
        top:-100,
        left:-100,
        right:400,
        bottom:400
    }}
    dragSnapToOrigin={true}
    // dragMomentum={true}
    dragElastic={[0.2]}
    dragTransition={{bounceStiffness:600,bounceDamping:10}}
    className='w-44 h-44 rounded-full bg-white mt-20'>

    </motion.div>
  )
}

export default Draggable