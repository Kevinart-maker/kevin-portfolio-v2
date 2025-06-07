'use client';

import { projectSlide } from "@/app/data/data";
import Image from "next/image";

export default function ProjectSlider() {
    // Duplicate slides for infinite effect
    const slides = [...projectSlide, ...projectSlide];

    return (
        <div className="relative w-full overflow-hidden mt-[-7rem]">
            <div
                className="flex gap-5 animate-slide py-8 transition-transform duration-1000"
                style={{
                    width: `${slides.length * 25}rem`, // Adjust width based on slide count
                }}
            >
                {slides.map((item, index) => (
                    <div key={index} className="p-5 rounded-[1rem] bg-gray-200 blurry hover:scale-105">
                        <div className="overflow-hidden min-w-[25rem] rounded-[0.5rem]">
                            <Image
                                src={item.image}
                                width={800}
                                height={100}
                                alt="project-slide"
                                className=""
                            />
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                @keyframes slide {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-slide {
                    animation: slide 50s linear infinite;
                }
            `}</style>
        </div>
    );
}