import Link from 'next/link';

import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Pulse from '../ui/Pulse';

export default function Footer() {
  return (
    <footer className='p-[2rem] flex flex-col gap-[3rem]'>
      <div className='w-full h-[0.1px] bg-gray-200'/>

      <div className='flex flex-col gap-[3rem] md:flex-row justify-center md:justify-between items-center'>
        <div className='flex items-center gap-[1.8rem] text-3xl font-bold'>
            <Link href='/'>Kevin.</Link>
        </div>
        <a href="https://cal.com/odeyemikevin/15min" target='_blank' className='bg-[var(--foreground)] text-[var(--background)] px-6 py-2 rounded-[2rem] flex items-center gap-2'>
          <span>Book a call</span>
          <Pulse />
        </a>
      </div>

      <div className='flex flex-col gap-[3rem] md:flex-row justify-center md:justify-between items-center'>
        <p className='text-center text-sm text-gray-500'>© {new Date().getFullYear()} Kevin. All rights reserved.</p>

        <div className='flex gap-4 text-[#808080]'>
            <IoLogoInstagram  className='hover:scale-[1.5] hover:rotate-[360deg]'/>
            <FaXTwitter className='hover:scale-[1.5] hover:rotate-[360deg]' />
            <FaLinkedinIn className='hover:scale-[1.5] hover:rotate-[360deg]' />
            <FaTiktok className='hover:scale-[1.5] hover:rotate-[360deg]' />
        </div>
      </div>
    </footer>
  )
}