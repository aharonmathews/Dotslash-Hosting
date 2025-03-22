import { Unbounded } from 'next/font/google';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const unbounded = Unbounded({ subsets: ["latin"], weight: ["400", "700"], preload: false });

type Props = {
  url?: string;
  small?: boolean;
  text?: string;
  invert?: boolean;
  external?: boolean;
};

const HoverButton = ({url="#", small=false, text="REGISTER", invert=false, external=false}:Props) => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  
  // Handle click with navigation optimization
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (external) return; // Let the Link component handle external links
    
    e.preventDefault();
    setIsClicked(true);
    
    // Use a very short timeout to allow the click state to render
    // but not delay navigation perceptibly
    setTimeout(() => {
      router.push(url);
    }, 50);
  };
  
  if(invert) {
    return(
      <Link href={url} prefetch={!external} className='z-[30] w-fit h-fit'>
        <button 
          onClick={handleClick}
          className={`border-2 border-[#D1A83A] group relative overflow-hidden bg-black text-[#D1A83A] ${unbounded.className} font-medium rounded-full shadow-md transition ${isClicked ? 'scale-95' : ''} ${small ? 'px-10 py-3' : 'px-16 py-4'}`}
        >
          <p className='group-hover:-translate-y-11 ease-in-out-expo transition duration-[600ms] ease-[cubic-bezier(0, 0, 0, 1)]'>
            {text}
          </p>
          <p className={`absolute left-0 top-16 group-hover:top-0 transition-all delay-75 duration-[600ms] ease-in-out-expo text-black bg-[#D1A83A] ${small ? 'px-10 py-3' : 'px-16 py-4'} w-full`}>
            {text}
          </p>
        </button>
      </Link>
    );
  }

  return (
    <Link href={url} prefetch={!external} scroll={true}>
      <button 
        onClick={handleClick}
        className={`bg-[#D1A83A] border-2 border-[#D1A83A] group relative overflow-hidden text-black ${unbounded.className} font-medium rounded-full shadow-md transition ${isClicked ? 'scale-95' : ''} ${small ? 'px-10 py-3' : 'px-16 py-4'}`}
      >
        <p className='group-hover:-translate-y-11 ease-in-out-expo transition duration-[600ms] ease-[cubic-bezier(0, 0, 0, 1)]'>
          {text}
        </p>
        <p className={`absolute left-0 top-16 group-hover:top-0 transition-all delay-75 duration-[600ms] ease-in-out-expo bg-black text-[#D1A83A] ${small ? 'px-10 py-3' : 'px-16 py-4'} w-full`}>
          {text}
        </p>
      </button>
    </Link>
  );
};

export default HoverButton;