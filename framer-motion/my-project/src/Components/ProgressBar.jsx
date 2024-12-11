import React from 'react'
import { motion } from 'framer-motion'

const ProgressBar = () => {
  return (
    <div className="mt-6">
        <div className="w-full h-2 rounded bg-white">
            <motion.div 
            animate={
                {
                    width:"100%",
                    scale:"2",
                    rotateZ:[100,200]
                }
            }
            transition={{
                duration:"10"
            }}
            className=" w-1/12 h-full bg-cyan-300"
            ></motion.div>
        </div>
    </div>
  )
}

export default ProgressBar