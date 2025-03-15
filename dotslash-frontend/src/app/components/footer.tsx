import React from 'react'
import dotslash from "../assets/dotslash.svg"
import Image from 'next/image'
import { Noto_Sans, Unbounded } from 'next/font/google';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const unbounded = Unbounded({ weight: '400', style: 'normal', preload:false });
const notoSans = Noto_Sans({ weight: '400', style: 'normal', preload:false });

const Footer = () => {
  return (
    <div className='bg-[#D1A83A] w-screen px-[20px] lg:px-[54px] pt-[50px] text-black'>

        <div className='flex flex-col gap-[38px] lg:flex-row lg:items-start lg:gap-[350px] lg:mb-[120px]'>
            <div className="flex flex-col gap-6">
                <Image src={dotslash} alt="dotslash"/>
                
                {/* Social Media Icons */}
                <div className="flex space-x-10 mt-2 ml-[3.2rem]">
                    <a href="https://www.instagram.com/dotslash.cet/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Instagram size={30} className="hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://in.linkedin.com/company/dotslash-cse-cet" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={30} className="hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://x.com/dotslash_cet?lang=en" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter size={30} className="hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>
            
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
                <div className={`flex flex-col gap-[16px] text-[16px] ${notoSans.className}`}>
                    <div className="font-semibold">Contact:</div>
                    <div>
                        <div className="font-medium">Geevees</div>
                        <div className="text-sm">+91 95623 20988</div>
                    </div>
                    <div>
                        <div className="font-medium">Arya Vijayan</div>
                        <div className="text-sm">+91 77364 73139</div>
                    </div>
                    <div>
                        dotslashcet.cse@gmail.com
                    </div>
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