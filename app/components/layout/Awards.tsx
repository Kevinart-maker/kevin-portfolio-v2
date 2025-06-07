"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CountUp from 'react-countup';

import 'swiper/css';

export default function Awards() {
  return (
    <div className='w-[20rem] max-xl:w-full h-[20rem] p-6 px-[3rem] border-3 border-[var(--foreground)] primary2 rounded-[2rem] xl:rounded-full items-center justify-center text-white text-xl'>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className='w-full h-full flex items-center justify-center next-custom-swiper'
      >
        <SwiperSlide>
          <div className='w-full h-full flex flex-col gap-3 items-center justify-center cursor-grab text-center'>
            <h1 className='text-[4rem] font-semibold'>
              <CountUp end={600} duration={2} />+
            </h1>
            <span>Developers inspired worldwide</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full flex flex-col gap-3 items-center justify-center cursor-grab text-center'>
            <h1 className='text-[4rem] font-semibold'>
              <CountUp end={132} duration={2} />
            </h1>
            <span>Liters of coffee consumed this year</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full flex flex-col gap-3 items-center justify-center cursor-grab text-center'>
            <h1 style={{ width: '' }} className='text-[4rem] font-semibold'>
              <CountUp end={100} duration={3} separator="," />k
            </h1>
            <span>Total lines of code written</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full flex flex-col gap-3 items-center justify-center cursor-grab text-center'>
            <h1 className='text-[4rem] font-semibold'>
              <CountUp end={1744} duration={2.5} />
            </h1>
            <span>Critical bugs fixed ...and counting</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full flex flex-col gap-3 items-center justify-center cursor-grab text-center'>
            <h1 className='text-[4rem] font-semibold'>
              <CountUp end={50} duration={2} />+
            </h1>
            <span>Major projects delivered successfully</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}