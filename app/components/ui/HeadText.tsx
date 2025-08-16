'use client';

import { ReactNode } from "react";
import { motion } from 'motion/react';

export default function HeadText({ text }: {text: ReactNode}) {
  return (
    <h1>
      <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ duration: 0.4, type: 'spring' }} className="font-bold text-[2.5rem] text-center md:text-[4rem] flex items-center md:items-start">
      <div className="md:translate-x-[-1.5rem] translate-x-[0.5rem] rotate-[60deg]">
          <div className='w-px h-[1rem] md:h-[1rem] bg-[#ebcdcd]'/>
          <div className='w-[1rem] md:w-[1rem] h-px bg-[#474747] translate-x-[-1rem] md:translate-x-[-1.5rem] translate-y-[-1rem] md:translate-y-[-1.5rem]'/>
      </div>
  
      <div className='leading-[1] tracking-tighter'>{text}</div>
  
      <div className="md:translate-x-[4.5rem] translate-x-[-0.4rem] rotate-[-60deg]">
          <div className='w-px h-[1rem] md:h-[1rem] bg-[#ebcdcd]'/>
          <div className='w-[1rem] md:w-[1rem] h-px bg-[#474747] translate-x-[-1rem] md:translate-x-[-1.5rem] translate-y-[-1rem] md:translate-y-[-1.5rem]'/>
      </div>
      </motion.div>
    </h1>
  )
}