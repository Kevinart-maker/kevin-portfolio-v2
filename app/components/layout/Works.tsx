import { works } from "@/app/data/data"
import TiltedCard from "../ui/TiltedCard"

export default function Works() {
  const work = works.map((item, index)=>(
    // <TiltedCard 
    //   key={index}
    //   imageSrc={item.image}
    //   altText={item.title}
    //   captionText={item.title}
    //   overlayContent={
    //     <div>
    //       <h1>{item.title}</h1>
    //       <p>{item.description}</p>
    //     </div>
    //   }
    //   />

    <a href={item.url} target='_blank' key={index} className='min-w-[18rem] h-[30rem] flex flex-col justify-between rounded-[2rem] border border-[#474747] text-sm text-[var(--text)] py-[1rem] hover:bg-[var(--hover)] hover:text-[var(--background)]'>
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
    <div className="md:px-[5rem] mt-[10rem] xl:mt-[15rem] flex flex-col gap-[7rem] items-center w-full text-left relative">

      <h1 className="font-bold text-[2.5rem] text-center md:text-[3rem] relative">
        <div className="absolute right-0 md:-right-[10rem] -top-5">
          <div className='w-px h-[3rem] bg-[#474747]'/>
          <div className='w-[3rem] h-px bg-[#474747] translate-x-[-1.5rem] translate-y-[-1.5rem]'/>
        </div>

        <div className="absolute left-10 md:-left-[8rem] xl:-left-[10rem] -top-5">
          <div className='w-px h-[3rem] bg-[#474747]'/>
          <div className='w-[3rem] h-px bg-[#474747]  translate-x-[-1.5rem] translate-y-[-1.5rem]'/>
        </div>
        Here's a taste of <br /> what we cook
      </h1>

      <div className='w-full px-[1rem] flex gap-[1rem] pb-[3rem] overflow-hidden overflow-x-auto scrollbar'>
        {work}
      </div>
    </div>
  )
}