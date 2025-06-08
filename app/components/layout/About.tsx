'use client';

import Threads from '../ui/Threads'

export default function About() {

  return (
    <main className='h-[80vh] md:h-[60vh] flex items-center justify-center relative'>
        <div className='self-start w-full h-[40vh]'>
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
          />
        </div>

        <div className='absolute bottom-0 flex flex-col gap-6 xl:w-[50%] text-center md:px-10'>
            <h1 className='font-bold text-[3rem] md:text-[4rem] tracking-tighter'>
              hey there!
            </h1>
            <p className='text-lg text-[#808080]'>
              I&apos;m a <span className='text-[var(--text)]'>software engineer</span> who builds conversion-focused websites and apps. I've worked with startups and small businesses to turn ideas into revenue driving digital experiences. I care about results and user experience, not just pretty pixels.
            </p>
        </div>
    </main>
  );
}