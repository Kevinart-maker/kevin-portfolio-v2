'use client';

import ClickSpark from "../ui/ClickSpark";
import Iridescence from "../ui/Iridescence";
import Pulse from "../ui/Pulse";
import SplitText from "./SplitText";
import Link from 'next/link'
import { motion } from 'motion/react';

export default function Header() {
  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className='overflow-hidden w-full h-[90vh] rounded-[2rem] relative text-white'>
        
      <motion.header initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ duration: 0.4, type: 'spring' }}  className="absolute flex flex-col gap-6 items-center justify-center inset-0 z-50  text-xs md:text-lg"> 
          <div className="flex flex-col items-center text-center gap-2">
            <div className="cursor-default px-6 py-2 text-xs rounded-[3rem] glassy flex items-center gap-3">
              <Pulse />
              Available for New Projects.
            </div>
              {/* <AnimatedText /> */}
            <SplitText 
              delay={30}
              duration={0.2}
              className="font-bold leading-tight text-[3rem] xl:text-[4rem] xl:w-[70%] text-center text-white"
            />

            <p className="text-sm" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }} >We specialize in delivering websites and apps that focuses on business growth for our clients.</p>
          </div>

          <a href="https://cal.com/odeyemikevin/15min" className="bg-[var(--background)] text-[var(--foreground)] px-8 py-2 rounded-[2rem]">Book a call</a>
        </motion.header>
        
        <div className="relative w-full h-full">
          <div className="absolute inset-0 pointer-events-none rounded-[2rem]" />
          <Iridescence color={[0.4, 0.6, 1]}/>
        </div>
      </div>
    </ClickSpark>
  );
}