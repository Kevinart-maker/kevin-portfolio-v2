'use client'

import HeadText from '../ui/HeadText';
import Particles from '../ui/Particle';
import Scroll from '../ui/Scroll';

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
        <HeadText text={<span>what we can do <br /> for you</span>}/>
      </header>

      <div className="relative h-[25rem] overflow-hidden text-center border border-[#474747] rounded-[2rem]">
        <div className="translate-x-[-1.5rem] absolute left-[5rem] top-[4rem]">
            <div className='w-px h-[3rem] bg-[#474747]'/>
            <div className='w-[3rem] h-px bg-[#474747] translate-x-[-1.5rem] translate-y-[-1.5rem]'/>
        </div>
        <div className="translate-x-[-1.5rem] absolute left-[5rem] bottom-[4rem]">
            <div className='w-px h-[3rem] bg-[#474747]'/>
            <div className='w-[3rem] h-px bg-[#474747] translate-x-[-1.5rem] translate-y-[-1.5rem]'/>
        </div>
        <div className="translate-x-[-1.5rem] absolute right-[3%] top-[4rem]">
            <div className='w-px h-[3rem] bg-[#474747]'/>
            <div className='w-[3rem] h-px bg-[#474747] translate-x-[-1.5rem] translate-y-[-1.5rem]'/>
        </div>
        <div className="translate-x-[-1.5rem] absolute right-[3%] bottom-[4rem]">
            <div className='w-px h-[3rem] bg-[#474747]'/>
            <div className='w-[3rem] h-px bg-[#474747] translate-x-[-1.5rem] translate-y-[-1.5rem]'/>
        </div>

        <div className="animate-vertical-scroll flex flex-col">
          {[...services, ...services].map((item, idx) => (
            <Scroll key={idx} bg={item.bg}>{item.text}</Scroll>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes vertical-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-vertical-scroll {
          animation: vertical-scroll 12s linear infinite;
        }
      `}</style>
    </section>
  );
}