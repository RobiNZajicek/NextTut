'use client'
import React from 'react'
import {AnimatePresence,motion} from 'framer-motion'
import { usePathname } from 'next/navigation'
const PageTransiton = ({children}) => {
    const pathname = usePathname()
  return (
    <AnimatePresence>
        <motion.div key={pathname} initial={{opacity:1}} animate={{opacity:0,transition:{delay:1,duration:0.4,ease :'easeInOut'}
    }}
    className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
    >
        
    </motion.div>
        {children}
    </AnimatePresence>
  )
}

export default PageTransiton