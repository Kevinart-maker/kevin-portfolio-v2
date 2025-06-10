'use client';

import Link from 'next/link';
import ThemeToggle from './../ui/ThemeToggle';
import { useState } from 'react';

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    document.body.style.overflow = show ? 'auto' : 'hidden'; // Prevent scrolling when menu is open

    console.log('Menu clicked:', show ? 'Closing' : 'Opening');
  }
  
  return (
    <nav className="fixed top-0 left-0 w-full z-[100]">
        <div className="w-full h-[10px] bg-[var(--background)] z-[300]"/>
        
        <div className='flex justify-between items-center p-5 px-[2rem] blurry rounded-[3rem] w-[85%] absolute left-1/2 top-[calc(7px+1rem)] transform -translate-x-1/2 text-white'>
            <div className='flex items-center gap-[1.8rem] text-3xl font-bold'>
              <Link href='/'>Kevin.</Link>
            </div>

            <div className='hidden md:flex  items-center gap-[1.5rem]'>
              <a href="#services">Services</a>
              <a href="#works">Work</a>
              <a href="#testimonials">Testimonials</a>
              <a href="https://cal.com/odeyemikevin/15min" target='_blank' className='bg-[var(--background)] text-[var(--foreground)] px-6 py-2 rounded-[2rem]'>Book a call</a>
              <ThemeToggle />
            </div>
            <div className={`flex md:hidden font-medium border rounded-[2rem] h-fit p-2 px-4 border-[var(--background)] bg-[var(--background)] text-[var(--foreground)]`} onClick={handleClick}>Menu</div>
        </div>

        <div className='md:hidden w-full absolute top-[10px] px-1 rounded-[2rem]'>

          
          <div className={`w-full relative ${show ? 'h-[95vh] bg-[#5c54f9] rounded-[2rem] flex flex-col items-end p-3' : 'h-0'} overflow-hidden text-white`}>

            <div className={`absolute top-[1rem] right-[1rem] w-fit font-medium border rounded-[2rem] h-fit p-2 px-4 ${show ? 'border-white text-white' : 'hidden border-[var(--background)] bg-[var(--background)]'}`} onClick={handleClick}>{show ? 'Close' : 'Menu'}</div>


            <div className='flex flex-col w-full gap-3 mt-[10rem] text-2xl font-medium'>
              <a href='#services' onClick={handleClick}>Services</a>
              <div className='w-full h-[0.1px] bg-white'/>
              <a href='#works' onClick={handleClick}>Work</a>
              <div className='w-full h-[0.1px] bg-white'/>
              <a href='#testimonials' onClick={handleClick}>Testimonials</a>
              <div className='w-full h-[0.1px] bg-white'/>
              <a href="https://cal.com/odeyemikevin/15min" target='_blank' onClick={handleClick}>Book a call</a>
              <div className='w-full h-[0.1px] bg-white'/>
            </div>

            <ThemeToggle/>
          </div>
        </div>
    </nav>
  );
}