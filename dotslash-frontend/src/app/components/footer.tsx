import React from 'react'
import dotslash from "../assets/dotslash.svg"
import Image from 'next/image'
import { Noto_Sans, Unbounded } from 'next/font/google';


const unbounded = Unbounded({ weight: '400', style: 'normal', preload:false });
const notoSans = Noto_Sans({ weight: '400', style: 'normal', preload:false });

const Footer = () => {
  return (
    <div className='bg-[#D1A83A] w-screen px-[20px] lg:px-[54px] pt-[50px] text-black'>

        <div className='flex flex-col gap-[38px] lg:flex-row lg:items-start lg:gap-[350px] lg:mb-[120px]'>
            <Image src={dotslash} alt="dotslash"/>
            <div className='flex flex-wrap md:flex-row gap-x-[80px] gap-y-[48px] lg:gap-x-[143px] mb-5'>
                <div className={`flex flex-col gap-[16px]  text-[16px] ${notoSans.className}`}>
                    <a href='#home'>Home</a>
                    <a href='#events'>Events</a>
                    <a href='#gallery'>Gallery</a>
                </div>
                <div className={`flex flex-col gap-[16px]  text-[16px] ${notoSans.className}`}>
                    <a href='#collaboration' >For Clubs</a>
                    <a href='#collaboration'>For Sponsors</a>
                    <a href='#tshirt'>Get T-Shirt</a>
                </div>
                <div>
                    Contact:
                </div>
            </div>
        </div>

        <div className={`text-[39px] lg:text-[96px] ${unbounded.className} uppercase leading-tight w-full py-[30px] border-b-[1px] border-b-black`}>
            The power <br/> to <u>create</u>
        </div>
        <div className='w-full flex flex-row items-center justify-center uppercase py-[20px]'>
            Dotslash CET
        </div>
    </div>
  )
}

export default Footer