import { Unbounded } from 'next/font/google';
import Link from 'next/link';
import React from 'react'

const unbounded = Unbounded({ subsets: ["latin"], weight: ["400", "700"], preload: false });

type Props = {
  url?: string;
  small?: boolean;
  text?:string;
  invert?:boolean;
};


const HoverButton = ({url="#", small=false, text="REGISTER", invert=false}:Props) => {
  if(invert)
    return(
      <Link href={url}>
      <button className={`  border-2 border-[#D1A83A] group relative overflow-hidden bg-black text-[#D1A83A]  ${unbounded.className} font-medium rounded-full shadow-md transition mt-10 ${small?`px-10 py-3`:`px-16 py-4`}`}>
        <p className='group-hover:-translate-y-11 ease-in-out-expo transition duration-700 ease-[cubic-bezier(0, 0, 0, 1)]'>
          {text}
        </p>
        <p className={`absolute left-0 top-16 group-hover:top-0 transition-all delay-75 duration-700 ease-in-out-expo text-black bg-[#D1A83A] ${small?`px-10 py-3`:`px-16 py-4`}`}>
          {text}
        </p>
      </button>
    </Link>
  );

  return (
    <Link href={url}>
      <button className={` bg-[#D1A83A] border-2 border-[#D1A83A] group relative overflow-hidden text-black ${unbounded.className} font-medium rounded-full shadow-md transition mt-10 ${small?`px-10 py-3`:`px-16 py-4`}`}>
        <p className='group-hover:-translate-y-11 ease-in-out-expo transition duration-700 ease-[cubic-bezier(0, 0, 0, 1)]'>
          {text}
        </p>
        <p className={`absolute left-0 top-16 group-hover:top-0 transition-all delay-75 duration-700 ease-in-out-expo bg-black text-[#D1A83A] ${small?`px-10 py-3`:`px-16 py-4`}`}>
          {text}
        </p>
      </button>
    </Link>
  )
}

export default HoverButton