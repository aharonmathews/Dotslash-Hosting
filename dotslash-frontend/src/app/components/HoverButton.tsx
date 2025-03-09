import { Unbounded } from 'next/font/google';
import React from 'react'

const unbounded = Unbounded({ subsets: ["latin"], weight: ["400", "700"], preload: false });

const HoverButton = () => {
  return (
    <button className={`px-16 py-4 bg-[#D1A83A] border-2 border-[#D1A83A] group relative overflow-hidden text-black ${unbounded.className} font-medium rounded-full shadow-md transition mt-10`}>
      <p className='group-hover:-translate-y-11 ease-in-out-expo transition duration-700 ease-[cubic-bezier(0, 0, 0, 1)]'>
        REGISTER
      </p>
      <p className='absolute left-0 top-16 group-hover:top-0 transition-all delay-75 duration-700 ease-in-out-expo px-16 py-4 bg-black text-[#D1A83A]'>
        REGISTER
      </p>
    </button>
  )
}

export default HoverButton