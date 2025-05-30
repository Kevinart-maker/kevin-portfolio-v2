"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { GoArrowRight } from "react-icons/go";

import 'swiper/css';
import './slide.css'

export default function Works() {
  return (
    <div className='w-[20rem] max-xl:w-full h-[26rem] p-4 rounded-[2rem] items-center justify-center text-white text-[1.5rem] bg-[#5c54f9] relative'>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className='w-full h-full custom-swiper'
      >
        <SwiperSlide>
          <div className='w-full h-full flex flex-col gap-6 cursor-grab'>
            <div className='bg-black rounded-[2rem] w-full flex items-center justify-center'>
                <img src="/react3.svg" alt="" />
            </div>
            <span className='font-semibold w-[75%]'>Building a responsive design system with tailwind css</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full flex flex-col gap-6 cursor-grab'>
            <div className='bg-black rounded-[2rem] w-full flex items-center justify-center'>
                <img src="/react2.svg" alt="" />
            </div>
            <span className='font-semibold w-[75%]'>Next Level SEO, Dynamic Routing with NextJS</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full flex flex-col gap-6 cursor-grab'>
            <div className='bg-black rounded-[2rem] w-full flex items-center justify-center'>
                <img src="/react.svg" alt="" />
            </div>
            <span className='font-semibold w-[75%]'>Performance Optimization with React 19</span>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className='w-full h-full flex flex-col gap-6 items-center cursor-grab text-center'>
            <div className='bg-black rounded-[2rem] w-full'>
                <img src="/react4.svg" alt="" />
            </div>
            <span className='font-semibold text-2xl'>Building a responsive system</span>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className='w-full h-full flex flex-col gap-6 cursor-grab'>
            <div className='bg-black rounded-[2rem] w-full flex items-center justify-center'>
                <img src="/react5.svg" alt="" />
            </div>
            <span className='font-semibold w-[75%]'>Building scalable React Apps</span>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className='absolute z-50 bottom-0 right-0 flex flex-col'>
        <svg className="curve rotate-[180deg] self-end svg-corner corner-content-box-two" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_310_2)"><path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor"></path></g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>
        <div className='flex'>
            <svg className="curve rotate-[180deg] self-end svg-corner corner-content-box-two" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_310_2)"><path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor"></path></g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>
            <div className='bg-[var(--background)] rounded-tl-[2rem] p-3'>
                <div className='w-[4rem] h-[4rem] rounded-full p-2 border bg-[#171717] flex items-center justify-center text-2xl'>
                    <GoArrowRight />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}