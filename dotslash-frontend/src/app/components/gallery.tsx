"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import cosmiceye from '@/app/assets/cosmiceye.png'
import volcano from '@/app/assets/volcano.png'
import crackedface from '@/app/assets/cracked-face.png'
import desert from '@/app/assets/desert.png'
import fireface from '@/app/assets/fire-face.png'
import blindfold from '@/app/assets/blindfold.png'
import stoneface from '@/app/assets/stone-face-desert.png'
import rockwall from '@/app/assets/rock-wall.png'
import background from '@/app/assets/bg_gallery.jpeg'

import { useScroll, motion, useTransform, cubicBezier } from 'framer-motion'

const Gallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "12vh"], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
  return (
    <div className="w-full relative  ">
       <div className="absolute inset-0 -z-1 "style={{ transform: 'translateY(-280px)', opacity:"0.44" }}>
        <Image
          src={background}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          priority 
        />
      </div>
      <div className="max-w-[1440px] mx-auto relative py-[169px] min-h-[1649px]">
       
        <h1 className="font-[Unbounded] text-8xl text-white absolute left-[69px] top-[169px] hidden md:block">GLIMPSES OF DOTSLASH &apos;23</h1>
        
        {/* Desktop Layout */}
        <div className="hidden md:block relative w-[1240px] h-[1076px] mx-auto mt-[206px]">
          {/* Center Top - Cosmic Eye */}
          <div ref={containerRef} className="absolute w-[612px] h-[405px] left-[calc(50%-612px/2)] bottom-[671px] overflow-hidden rounded">
            <motion.div style={{y}} className='h-full'>
              <Image
                src={cosmiceye}
                alt="Cosmic portal with person standing"
                fill
                style={{ objectFit: 'cover' }}
                className="scale-110 hover:scale-[105%] -translate-y-5 transition-transform duration-300 ease-in-out"
              />
            </motion.div>
          </div>
          
          {/* Left Top - Volcano */}
          <div className="absolute w-[299px] h-[449px] left-[calc(50%-299px/2-470.5px)] bottom-[420px] overflow-hidden rounded">
            <motion.div style={{y}} className='h-full'>
              <Image
                src={volcano}
                alt="Glowing crater"
                fill
                style={{ objectFit: 'cover' }}
                className="scale-110 hover:scale-[105%] transition-transform duration-300 ease-in-out"
              />
            </motion.div>
          </div>
          
          {/* Center Left - Stone Face Desert */}
          <div className="absolute w-[299px] h-[240px] left-[calc(50%-299px/2-156.5px)] bottom-[420px] overflow-hidden rounded">
            <motion.div style={{y}} className='h-full'>
              <Image
                src={stoneface}
                alt="Fallen statue in desert"
                fill
                style={{ objectFit: 'cover' }}
                className="scale-[120%] hover:scale-110 -translate-y-14  transition-transform duration-300 ease-in-out"
              />
            </motion.div>
          </div>
          
         {/* Far Right - Blindfolded Statue */}
          <div className="absolute w-[299px] h-[236px] left-[calc(50%-299px/2+470.5px)] bottom-[588px] overflow-hidden rounded">
            <motion.div style={{y}} className='h-full'>
              <Image
                src={blindfold}
                alt="Desert sunset landscape"
                fill
                style={{ objectFit: 'cover' }}
                className="scale-[115%] hover:scale-[105%] -translate-y-10  transition-transform duration-300 ease-in-out"
              />
            </motion.div>
          </div>
          
          {/* Center Right - Crowned Statue */}
          <div className="absolute w-[299px] h-[404px] left-[calc(50%-299px/2+157.5px)] bottom-[252px] overflow-hidden rounded">
            <motion.div style={{y}} className='h-full'>
              <Image
                src={crackedface}
                alt="Crowned statue"
                fill
                style={{ objectFit: 'cover' }}
                className="scale-[115%] hover:scale-[105%] -translate-y-20  transition-transform duration-300 ease-in-out"
              />
            </motion.div>
          </div>
          {/* Right Top - Desert Landscape */}
          
          <div className="absolute w-[299px] h-[449px] left-[calc(50%-299px/2+470.5px)] bottom-[120px] overflow-hidden rounded">
            <motion.div style={{y}} className='h-full'>
              <Image
                src={desert}
                alt="Blindfolded statue"
                fill
                style={{ objectFit: 'cover' }}
                className="scale-[120%] hover:scale-[115%] -translate-y-14 transition-transform duration-300 ease-in-out"
              />
            </motion.div>
          </div>
          
          {/* Bottom Center - Rock Wall */}
          <div className="absolute w-[612px] h-[405px] left-[calc(50%-612px/2-314px)] bottom-[0px] overflow-hidden rounded">
            <motion.div style={{y}} className='h-full'>
              <Image
                src={rockwall}
                alt="Ancient stone masks along a wall"
                fill
                style={{ objectFit: 'cover' }}
                className="scale-110 hover:scale-[105%] -translate-y-24  transition-transform duration-300 ease-in-out"
              />
            </motion.div>
          </div>
          
          {/* Bottom Right - Fire Face */}
          <div className="absolute w-[299px] h-[236px] left-[calc(50%-299px/2+157.5px)] bottom-[0px] overflow-hidden rounded">
            <motion.div style={{y}} className='h-full'>
              <Image
                src={fireface}
                alt="Face with glowing cracks"
                fill
                style={{ objectFit: 'cover' }}
                className="scale-[115%] hover:scale-[105%] -translate-y-20 transition-transform duration-300 ease-in-out"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Mobile Layout  */}
        <div className="md:hidden grid grid-cols-1 gap-4 max-w-[480px] mx-auto mt-[150px] px-4">
        <div className="absolute inset-0 -z-5 "style={{ transform: 'translateY(-1450px)', opacity:"0.50" }}>
          <Image
            src={background}
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
            priority 
          />
        </div>
          <h1 className="font-[Unbounded] text-5xl text-white mb-8 mx-auto z-10 text-center">GLIMPSES OF DOTSLASH &apos;23</h1>
          
          <div className="relative aspect-[3/2] overflow-hidden rounded">
            <div>
              <Image
                src={cosmiceye}
                alt="Cosmic portal with person standing"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>
          
          <div className="relative aspect-[2/3] overflow-hidden rounded">
            <Image 
              src={volcano} 
              alt="Glowing crater" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300" 
            />
          </div>
          
          <div className="relative aspect-[2/3] overflow-hidden rounded">
            <Image 
              src={blindfold} 
              alt="Blindfolded statue" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300" 
            />
          </div>
          
          <div className="relative aspect-[1/1] overflow-hidden rounded">
            <Image 
              src={stoneface} 
              alt="Fallen statue in desert" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300" 
            />
          </div>
          
          <div className="relative aspect-[3/4] overflow-hidden rounded">
            <Image 
              src={crackedface} 
              alt="Crowned statue" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300" 
            />
          </div>
          
          <div className="relative aspect-[5/4] overflow-hidden rounded">
            <Image 
              src={desert} 
              alt="Desert sunset landscape" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300" 
            />
          </div>
          
          <div className="relative aspect-[3/2] overflow-hidden rounded">
            <Image 
              src={rockwall} 
              alt="Ancient stone masks along a wall" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300" 
            />
          </div>
          
          <div className="relative aspect-[5/4] overflow-hidden rounded">
            <Image 
              src={fireface} 
              alt="Face with glowing cracks" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;