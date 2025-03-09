"use client"

import sphere from '../assets/sphere.png';
import Image from 'next/image';
import { Unbounded } from 'next/font/google';
import { useEffect } from 'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const unbounded = Unbounded({weight: '400', style: 'normal', preload:false});
const unboundedBold = Unbounded({weight: '700', style: 'normal', preload:false});

gsap.registerPlugin(ScrollTrigger);


export default function Welcome ()  {

    useEffect(() => {
        const banner = document.querySelector('.banner');
        
        gsap.set(banner, {
            xPercent:-25
        })

        gsap.to(banner, {
            ease: 'none',
            scrollTrigger: {
              trigger: banner,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              onUpdate: (self) => {
                const scrollAmount = self.progress * 20 - 20;
                gsap.to(banner, { xPercent: -50 + scrollAmount, ease: 'none' });
              },
            },
          });
        }, []);

    return (
        <div className="flex flex-col w-full ">
            <div className='flex justify-start pt-7 px-12 md:pt-10 md:px-24 -mb-3 md:-mb-10'>
                Welcome to
                </div>
            <div className='flex flex-col md:flex-row items-center justify-start md:space-x-36 pt-7 px-12 space-y-7 md:space-y-0 md:pt-10 md:px-24'>
                
                <div className={`text-4xl md:text-9xl text-[#D1A83A]  ${unbounded.className} leading-snug` }>
                    DotSlash 2025

                </div>
                <div className='flex items-center justify-center md:justify-items-end '>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic reiciendis deleniti a error autem iusto, placeat incidunt et? Veritatis laborum cumque harum aut reiciendis, dolorem pariatur voluptatibus laboriosam esse. Temporibus.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi laborum corrupti blanditiis aspernatur voluptatem tempora suscipit ratione explicabo, assumenda, omnis aliquam odio impedit voluptate totam error quidem commodi similique quam?
                </div>        
            </div>
            <div className='relative w-full'>
                <div className='relative w-fit'>
                    <Image src={sphere} alt="sphere" width={800}  priority className='relative z-10  md:px-24'/>
                    <div className="border-t-[1px] border-l-[1px] border-[#D1A83A] w-20 h-20 absolute top-10 left-10 z-20"></div>
                    <div className="border-b-[1px] border-l-[1px] border-[#D1A83A] w-20 h-20 absolute bottom-10 left-10 z-20"></div>
                    <div className="border-t-[1px] border-r-[1px] border-[#D1A83A] w-20 h-20 absolute top-10 right-10 z-20"></div>
                    <div className="border-b-[1px] border-r-[1px] border-[#D1A83A] w-20 h-20 absolute bottom-10 right-10 z-20"></div>
                </div>
                <div id="banner" className={`banner text-6xl md:text-9xl ${unbounded.className} absolute w-fit whitespace-nowrap`} 
                        style={{ top: '90%', transform: 'translateY(-50%)' }}>
                    DOTSLASH CET. DOTSLASH CET. DOTSLASH CET. DOTSLASH CET. DOTSLASH CET.
                </div>
            </div>        
        </div>

    );
}