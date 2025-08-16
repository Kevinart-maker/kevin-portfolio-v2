import React from 'react'

export default function Pulse() {
  return (
    <div className="relative w-fit h-fit flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center zoom -z-10" />
        <span
        className="inline-block w-[10px] h-[10px] rounded-full bg-[#62ace6] animate-pulse"
        aria-label="Online status"
        />
    </div>
  )
}