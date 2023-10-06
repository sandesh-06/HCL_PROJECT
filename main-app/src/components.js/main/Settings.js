import React from 'react'
import {FiSettings} from 'react-icons/fi'
import {motion} from 'framer-motion'

const settingVariant = {
    hover: {
        scale: 1.1,
    }
}
export default function Settings() {
  return (
    <>
        <motion.div className='w-[80px] h-[80px] absolute rounded-full bg-[#a688fa] bottom-8 right-12 z-50 shadow-2xl flex items-center justify-center cursor-pointer'
        variants={settingVariant}
        whileHover="hover"
        drag
        dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
        >
            <FiSettings className='text-[45px]'/>
        </motion.div>
    </>
  )
}
