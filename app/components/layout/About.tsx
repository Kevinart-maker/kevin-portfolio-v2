'use client';

import TiltedCard from '../ui/TiltedCard';
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function About() {

  return (
    <main className='mt-[20rem] mb-[20rem] h-[80vh] md:h-[60vh] flex items-center justify-center relative'>
        {/* <div className='self-start w-full h-[40vh] absolute top-5 z-0'>
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
          />
        </div> */}

        <div className='flex flex-col gap-6 text-center px-2 md:px-10'>
            <h1 className='font-bold text-[3rem] md:text-[4rem] tracking-tighter'>
              who is Kevin.
            </h1>
            <p className='text-lg text-[#808080] md:w-[50%] self-center'>
              I&apos;m a <span className='text-[var(--text)]'>software engineer</span> who builds conversion-focused websites and apps. I've worked with startups and small businesses to turn ideas into revenue driving digital experiences. I care about results and user experience, not just pretty pixels.
            </p>

            <div className='mt-[4rem] flex flex-col md:flex-row gap-6 justify-center items-center'>
              <div className='flex flex-col items-center md:items-start gap-2 md:gap-4 text-center md:w-[50%] md:text-left'>
                <p className='text-sm md:text-lg md:text-left h-fit text-[#808080]'>
                  Beyond development, I love creating content that tells a story — from engaging carousels to visual concepts that connect with people. For me, it&apos;s not just about pretty pixels; it&apos;s about results, impact, and experiences that resonate with users.
                </p>
                
                <div className='flex gap-4 text-[#808080]'>
                  <IoLogoInstagram  className='hover:scale-[1.5] hover:rotate-[360deg]'/>
                  <FaXTwitter className='hover:scale-[1.5] hover:rotate-[360deg]' />
                  <FaLinkedinIn className='hover:scale-[1.5] hover:rotate-[360deg]' />
                  <FaTiktok className='hover:scale-[1.5] hover:rotate-[360deg]' />
                </div>
              </div>
              <a href='https://www.instagram.com/kevinodeyemi/' target='_blank' rel='noopener noreferrer'>
                <TiltedCard 
                  imageSrc='/content/quote.png'
                  altText="Kevin - Instagram Post"
                  overlayContent={
                    <p className="blurry p-1 px-4 rounded-[1rem]">
                      Click to see my posts!
                    </p>
                  }
                  captionText="Do it!"
                  imageHeight='400px'
                  imageWidth='300px'
                  rotateAmplitude={12}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                />
              </a>
            </div>
        </div>
    </main>
  );
}