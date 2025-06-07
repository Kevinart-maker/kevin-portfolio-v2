import Threads from '../ui/Threads'

export default function About() {
  return (
    <main className='md:h-[80vh] h-[100vh] flex items-center justify-center'>
        <div className='self-start w-full h-[40vh]'>
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
          />
        </div>

        <div className='absolute flex flex-col gap-6 xl:w-[50%] text-center md:px-10'>
            <h1 className='font-bold text-[3rem]'>hey there!</h1>
            <p className='text-lg text-[#808080]'>
              I&apos;m a <span className='text-[var(--text)]'>software engineer</span> who builds conversion-focused websites and apps. I've worked with startups and small businesses to turn ideas into revenue driving digital experiences. I care about results and user experience, not just pretty pixels.
            </p>
        </div>
    </main>
  );
}