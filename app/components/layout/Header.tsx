import ClickSpark from "../ui/ClickSpark";
import Iridescence from "../ui/Iridescence";
import SplitText from "./SplitText";
import Link from 'next/link'

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
        
        <header className="absolute flex flex-col gap-6 items-center justify-center inset-0 z-50  text-xs md:text-lg"> 
          <div className="flex flex-col items-center text-center gap-2">
            <div className="cursor-default px-6 py-2 text-xs rounded-[3rem] border flex items-center gap-3">
                <div className="relative w-fit h-fit flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center zoom -z-10"/>
                  <span
                  className="inline-block w-[10px] h-[10px] rounded-full bg-green-400 animate-pulse"
                  aria-label="Online status"
                  />
              </div>
              Available for New Projects.
            </div>
              {/* <AnimatedText /> */}
            <h1 className="font-bold leading-tight text-[3rem] md:text-[3rem] text-center text-white">
              <SplitText 
                delay={30}
                duration={0.2}/>
            </h1>

            <p className="text-sm">We specialize in delivering websites and apps that focuses on business growth for our clients.</p>
          </div>

          <Link href="/waitlist" className="bg-[var(--background)] text-[var(--foreground)] px-6 py-2 rounded-[2rem]">Free Template</Link>
        </header>
        
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-black/40 pointer-events-none rounded-[2rem]" />
          <Iridescence />
        </div>
      </div>
    </ClickSpark>
  );
}