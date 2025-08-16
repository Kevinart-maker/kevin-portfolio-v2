'use client';

import { works } from "@/app/data/data"
import HeadText from '../ui/HeadText';
import { motion } from "motion/react";

export default function Works() {
  const work = works.map((item, index)=>(
    <a href={item.url} target='_blank' key={index} className='min-w-[20rem] h-[30rem] flex flex-col justify-between rounded-[2rem] border border-[#474747] text-sm text-[var(--text)] py-[1rem] hover:bg-[var(--hover)] hover:text-[var(--background)]'>
      <div className="p-[1rem] pt-[1.5rem] px-[1.5rem] h-[40%] flex flex-col gap-4">
        <span className='text-[#808080]'>
          {item.description}
        </span>
        <span>
          {item.summary}
        </span>
      </div>

      <div className="font-bold border-t border-b border-[#474747] p-[1rem] flex flex-col gap-3">
        <div className="text-[2rem] font-bold">{item.title}</div>

        <div className="flex gap-3 text-xs"> 
          <span>{item.niche}</span>
          <div className="w-px bg-[var(--foreground)] h-4 self-center"/>
          <span>{item.live}</span>
        </div>
      </div>

      <button className="w-fit self-center px-[2rem] rounded-[1rem] text-sm font-semibold bg-[var(--background)] text-[var(--text)] p-[0.5rem]">{ item.url ? 'VIEW' : 'COMING SOON' }</button>
    </a>
  ))
  
  return (
    <div id='works' className="md:px-[5rem] mt-[10rem] xl:mt-[15rem] flex flex-col gap-[7rem] items-center w-full text-left relative">

    <HeadText text={<span>here's a taste of <br /> what we cook</span>}/>

    <div className="overflow-hidden w-full">
      <motion.div initial={{ translateX: '100%' }} whileInView={{ translateX: 0 }} viewport={{ once: true }} className='w-full px-[1rem] flex gap-[1rem] pb-[3rem] overflow-hidden overflow-x-auto scrollbar'>
        {work}
      </motion.div>
    </div>
    </div>
  )
}