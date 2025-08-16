'use client';

import Image from 'next/image';
import React from 'react';
import { GiRoundStar } from "react-icons/gi";
// import logo from './logo.png';

const testimonials = [
    {
        text: "Kevin's dedication to providing exceptional service is unparalled. He worked swiftly without compromising quality, ensuring that my website not only met but exceeded my expectations.",
        name: "Oluseye Odeyemi",
        role: "Founder, Clabed",
        img: "/clabed.png",
        rating: 5,
    },
    {
        text: "Our startup needed an MVP fast — Kevin built a sleek, functional app in record time. His eye for detail and UX really stood out.",
        name: "David Kim",
        role: "Founder, UrbanEats",
        img: "/emp3.jpg",
        rating: 5,
    },
  {
    text: "Kevin completely transformed our online presence. The new website not only looks amazing but also doubled our conversion rate within a month.",
    name: "Sarah Williams",
    role: "Marketing Lead, GreenLeaf Solutions",
    img: "/emp1.jpg",
    rating: 5,
  },
  {
    text: "I loved how clear and collaborative the process was. Kevin made technical things easy to understand and delivered a site that reflects my brand perfectly.",
    name: "Priya Patel",
    role: "Freelance Graphic Designer",
    img: "/emp2.jpg",
    rating: 5,
  },
  {
    text: "Working with Kevin saved us countless hours. He didn’t just design a website; he created a digital experience that brings in new clients every week.",
    name: "James O’Connor",
    role: "Business Consultant",
    img: "/emp4.jpg",
    rating: 5,
  },
]

const testimonial2 = [
  {
    text: "Kevin guided me through the entire process of launching my first online store. The result was a clean, easy-to-manage site that my customers love.",
    name: "Linda Chen",
    role: "Owner, Chen’s Boutique",
    img: "/emp5.jpg",
    rating: 5,
  },
  {
    text: "As a freelancer, I needed a portfolio that stood out. Kevin built a site that feels personal yet professional — I’ve been booking more clients ever since.",
    name: "Jenna Ramirez",
    role: "Independent Contractor",
    img: "/emp6.jpg",
    rating: 5,
  },
  {
    text: "The custom features Kevin added to my e-commerce platform made managing products so much easier. Plus, the design really elevates my brand.",
    name: "Anna Müller",
    role: "E-commerce Entrepreneur",
    img: "/emp7.jpg",
    rating: 5,
  },
  {
    text: "Kevin not only delivered a great product but also gave advice on how to structure my content for better reach. He truly goes beyond just coding.",
    name: "Fatima Al-Farsi",
    role: "Software Engineer",
    img: "/emp8.jpg",
    rating: 5,
  },
]

// Duplicate testimonials for seamless infinite scroll
const scrollingTestimonials = [...testimonials, ...testimonials];
const testimonialSet2 = [...testimonial2, ...testimonial2];

export default function Testimonial() {
  return (
    <section id='testimonials' className="mt-[10rem] xl:mt-[15rem] w-full flex flex-col items-center justify-center py-[5rem] px-4 md:px-[5rem] appear">
      <h2 className={`font-bold text-[3rem] md:text-[4rem] tracking-tighter`}>
        Testimonials
      </h2>
      <div className="relative w-full max-w-6xl overflow-x-hidden py-[2rem] flex flex-col gap-[3rem]">
        <div
          className="flex gap-8 animate-marquee"
          style={{ minWidth: '200%', willChange: 'transform' }}
        >
          {scrollingTestimonials.map((tst, idx) => (
            <div
              key={idx}
              className="bg-[var(--background)] border border-[#474747] rounded-[1.5rem] flex flex-col items-center gap-4 p-8 min-w-[20rem] md:min-w-[30rem]"
            >
              <div className='flex items-center justify-between w-full'>
                    <div className='flex flex-col md:flex-row md:items-center gap-4'>
                        <div className='rounded-full w-[4rem] h-[4rem] overflow-hidden flex items-center justify-center'>
                            <Image
                            src={tst.img}
                            alt={tst.name}
                            width={90}
                            height={90}
                            className="w-full object-cover"
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-sm md:text-xl font-bold'>{tst.name}</h1>
                            <p className='text-xs md:text-sm text-[#808080]'>{tst.role}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-2 border border-[#474747] rounded-[2rem] p-2 px-[1.5rem]'>
                        <GiRoundStar className='text-[#62ace6]'/>
                        <span>{tst.rating}.0</span>
                    </div>

              </div>
              <p className="text-[0.6rem] md:text-sm text-[#808080]">&quot;{tst.text}&quot;</p>
            </div>
          ))}
        </div>

        <div
          className="flex gap-8 animate-marquee-reverse"
          style={{ minWidth: '200%', willChange: 'transform' }}
        >
          {testimonialSet2.map((tst, idx) => (
            <div
              key={idx}
              className="bg-[var(--background)] border border-[#474747] rounded-[1.5rem] flex flex-col items-center gap-4 p-8 min-w-[20rem] md:min-w-[30rem]"
            >
              <div className='flex items-center justify-between w-full'>
                    <div className='flex flex-col md:flex-row md:items-center gap-4'>
                        <div className='rounded-full w-[4rem] h-[4rem] overflow-hidden flex items-center justify-center'>
                            <Image
                            src={tst.img}
                            alt={tst.name}
                            width={90}
                            height={90}
                            className="w-full object-cover"
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-sm md:text-xl font-bold'>{tst.name}</h1>
                            <p className='text-xs md:text-sm text-[#808080]'>{tst.role}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-2 border border-[#474747] rounded-[2rem] p-2 px-[1.5rem]'>
                        <GiRoundStar className='text-[#62ace6]'/>
                        <span>{tst.rating}.0</span>
                    </div>

              </div>
              <p className="text-[0.6rem] md:text-sm text-[#808080]">&quot;{tst.text}&quot;</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>

      {/* <div className='text-center text-xs text-gray-500 flex items-center'>
        <Image src={logo} alt="PACE by EA Logo" className='w-[2rem]' />
        <span>powered by Google.</span>
      </div> */}
    </section>
  );
}