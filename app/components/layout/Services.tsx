'use client'

import HeadText from '../ui/HeadText';
import Particles from '../ui/Particle';
import Scroll from '../ui/Scroll';
import { motion } from 'motion/react';

const services = [
  { bg: "#f8b400", text: "Web development" },
  { bg: "#00b4d8", text: "Interface design" },
  { bg: "#00b4d8", text: "Mobile app development" },
  { bg: "#6a4c93", text: "Conversion optimization" },
];

export default function Services() {
  
  return (
    <section id='services' className='flex flex-col gap-[7rem] py-[3rem] relative'>
      <Particles alphaParticles={true}/>
      <header className="mt-[15rem] flex justify-center">
        <HeadText text={<span>what we can do for you</span>}/>
      </header>

      <div className="h-full flex flex-col gap-2">
        <div className="sticky top-[5rem] bg-[var(--background)] border border-[#474747] rounded-[2rem] w-full h-[30rem] z-10">
          <div className="p-4 flex flex-col items-center gap-4 justify-center h-full">
            <h3 className="flex flex-col items-center gap-4 text-[2rem] xl:text-[4rem] font-bold">
              <span>Web</span> 
              <motion.div
                className="border border-[#474747] rounded-[2rem] p-4 overflow-hidden h-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <video src="/web.mp4" className="object-cover" muted loop autoPlay></video>
              </motion.div>
              <span>Development</span>
            </h3>
            <p className="text-xs md:text-sm">Building responsive and functional websites.</p>
          </div>
        </div>
        <div className="sticky top-[8rem] bg-[var(--background)] border border-[#474747] rounded-[2rem] w-full h-[30rem] z-10">
          <div className="p-4 flex flex-col items-center gap-4 justify-center h-full">
            <h3 className="flex flex-col items-center gap-4 text-[2rem] xl:text-[4rem] font-bold">
              <span>Interface</span> 
              <motion.div
                className="border border-[#474747] rounded-[2rem] p-4 overflow-hidden h-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <video src="/interface.mp4" className="object-cover w-[10rem]" muted loop autoPlay></video>
              </motion.div>
              <span>Design</span>
            </h3>
            <p className="text-xs md:text-sm">Creating user-friendly interfaces.</p>
          </div>
        </div>
        <div className="sticky top-[11rem] bg-[var(--background)] border border-[#474747] rounded-[2rem] w-full h-[30rem] z-10">
          <div className="p-4 flex flex-col items-center gap-4 justify-center h-full">
            <h3 className="flex flex-col items-center gap-4 text-[2rem] xl:text-[4rem] font-bold">
              <span>Mobile App</span> 
              <motion.div
                className="border border-[#474747] rounded-[2rem] p-4 overflow-hidden h-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <video src="/web.mp4" className="object-cover w-[10rem]" muted loop autoPlay></video>
              </motion.div>
              <span>Development</span>
            </h3>
            <p className="text-xs md:text-sm">Developing apps for iOS and Android.</p>
          </div>
        </div>
        <div className="sticky top-[14rem] bg-[var(--background)] border border-[#474747] rounded-[2rem] w-full h-[30rem] z-10">
          <div className="p-4 flex flex-col items-center gap-4 justify-center h-full">
            <h3 className="flex flex-col items-center gap-4 text-[2rem] xl:text-[4rem] font-bold">
              <span>Conversion</span> 
              <motion.div
                className="border border-[#474747] rounded-[2rem] p-4 overflow-hidden h-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <video src="/solid.mp4" className="object-cover w-[10rem]" muted loop autoPlay></video>
              </motion.div>
              <span>Optimization</span>
            </h3>
            <p className="text-xs md:text-sm text-center">Improving website performance and user engagement.</p>
          </div>
        </div>
      </div>
    </section>
  );
}