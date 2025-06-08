'use client'

import Particles from '../ui/Particle';
import Scroll from '../ui/Scroll';

export default function Services() {
  return (
    <section id='services' className='flex flex-col gap-[7rem] py-[3rem] relative'>
      <Particles alphaParticles={true}/>
      <header className="text-center mt-[15rem]">
        <h1 className="font-bold text-[2.5rem] md:text-[3rem]">
          what we can do <br /> for you
        </h1>
      </header>

      <main className="h-[25rem] overflow-y-scroll flex flex-col gap-[1rem] snap-y snap-mandatory scrollbar-none text-center">
        <Scroll bg="#f8b400">Web development</Scroll>
        <Scroll bg="#00b4d8">Interface design</Scroll>
        <Scroll bg="#00b4d8">Mobile app development</Scroll>
        <Scroll bg="#6a4c93">Conversion optimization</Scroll>
      </main>
      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}