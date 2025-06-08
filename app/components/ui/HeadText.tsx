import { ReactNode } from "react";

export default function HeadText({ text }: {text: ReactNode}) {
  return (
    <h1 className="font-bold text-[2.5rem] text-center md:text-[4rem] flex items-center md:items-start">
    <div className="md:translate-x-[-1.5rem] translate-x-[1.5rem]">
        <div className='w-px h-[2rem] md:h-[3rem] bg-[#ebcdcd]'/>
        <div className='w-[2rem] md:w-[3rem] h-px bg-[#474747] translate-x-[-1rem] md:translate-x-[-1.5rem] translate-y-[-1rem] md:translate-y-[-1.5rem]'/>
    </div>

    <div className='leading-tight tracking-tighter'>{text}</div>

    <div className="md:translate-x-[4.5rem] translate-x-[1rem]">
        <div className='w-px h-[2rem] md:h-[3rem] bg-[#ebcdcd]'/>
        <div className='w-[2rem] md:w-[3rem] h-px bg-[#474747] translate-x-[-1rem] md:translate-x-[-1.5rem] translate-y-[-1rem] md:translate-y-[-1.5rem]'/>
    </div>
    </h1>
  )
}