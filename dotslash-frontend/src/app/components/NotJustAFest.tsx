import React from 'react'
import logo from "@/app/assets/logo.gif"
import dsolve from "@/app/assets/DSolve.png"
import dotnight from "@/app/assets/dotnight.png"
import Image from 'next/image'
import { Noto_Sans } from 'next/font/google'

const noto = Noto_Sans({ subsets: ["latin"], weight: ["400"] })

const NotJustAFest = () => {
    return (
        <div className='relative flex flex-col items-center justify-center h-fit my-[100px]'>
            <div className='w-[1054px] h-[1054px] absolute radial-gradient opacity-50'></div>
            <div className='absolute font-unbounded w-[186px] rounded-lg py-3 px-5 top-1/4 left-[40%] bg-white/5 border border-slate-700 backdrop-blur-lg z-20'>
                <p>Panel Discussions</p>
            </div>
            <div className='absolute font-unbounded w-[186px] rounded-lg py-3 px-5 top-1/3 right-1/4 bg-white/5 border border-slate-700 backdrop-blur-lg z-20'>
                <p>Workshops</p>
            </div>
            <div className='absolute font-unbounded w-[186px] rounded-lg py-3 px-5 top-[60%] left-1/4 bg-white/5 border border-slate-700 backdrop-blur-lg z-20'>
                <p>Talk Sessions</p>
            </div>
            <div className='absolute font-unbounded w-[200px] rounded-lg py-1 px-1 pb-3 top-[37%] left-[15%] bg-white/5 border border-slate-700 backdrop-blur-lg z-20'>
                <Image src={dsolve} alt="DotSlash Logo" className='w-[190px]'/>
                <p className='mt-2'>D Solve</p>
                <p className={`${noto.className} text-xs mt-1 opacity-80`}>Nulla dui volutpat in a non faucibus arcu in.. Massa molestie quis morbi id sit dictum odio diam elit..</p>
            </div>
            <div className='absolute font-unbounded w-[200px] rounded-lg py-1 px-1 pb-3 top-[50%] right-[25%] bg-white/5 border border-slate-700 backdrop-blur-lg z-20'>
                <Image src={dotnight} alt="DotSlash Logo" className='w-[190px]'/>
                <p className='mt-2'>DotNight</p>
                <p className={`${noto.className} text-xs mt-1 opacity-80`}>Nulla dui volutpat in a non faucibus arcu in.. Massa molestie quis morbi id sit dictum odio diam elit..</p>
            </div>
            <div className='md:w-[1216px] md:h-[1216px] flex items-center justify-center rounded-full border-[2px] border-[#D1A83A66]'>
                <div className='w-[854px] h-[854px] flex items-center justify-center rounded-full border-[2px] border-[#D1A83A66]'>
                    <div className='w-[686px] h-[686px] flex items-center justify-center rounded-full border-[2px] border-[#D1A83AB2]'>
                        <div className='w-[582px] h-[582px] flex items-center justify-center rounded-full border-[2px] border-[#D1A83A]'>
                            <div className='w-[486px] h-[486px] flex items-center justify-center rounded-full border-[2px] border-[#D1A83A]'>
                                <div className='w-[366px] h-[366px] flex items-center justify-center rounded-full border-[2px] border-[#D1A83A]'>
                                    <Image src={logo} alt="DotSlash Logo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='absolute top-10 font-unbounded uppercase leading-tight font-[400] text-[46px] md:text-[96px] text-center w-[340px] md:w-[580px]'>
                Not just a <b className='font-[400] text-[#D1A83A]'>fest</b>
            </p>
            <p className='absolute bottom-[15%] md:bottom-[10%] font-unbounded uppercase leading-tight font-[400] text-[46px] md:text-[96px] text-center w-[425px] md:w-[722px]'>
                The power to <b className='font-[400] text-[#D1A83A]'>explore</b>
            </p>

            <p className='font-unbounded max-w-[700px] font-[300] text-[14px] md:text-[20px] text-center mt-[40px]'>
            Lorem ipsum dolor sit amet consectetur. Auctor dignissim massa urna dui. Neque at sed tellus cursus posuere..
            </p>
        </div>
    )
}

export default NotJustAFest