import React from 'react';
import Image from 'next/image';
import cosmiceye from '@/app/assets/cosmiceye.png'
import volcano from '@/app/assets/volcano.png'
import crackedface from '@/app/assets/cracked-face.png'
import desert from '@/app/assets/desert.png'
import fireface from '@/app/assets/fire-face.png'
import blindfold from '@/app/assets/blindfold.png'
import stoneface from '@/app/assets/stone-face-desert.png'
import rockwall from '@/app/assets/rock-wall.png'

const Gallery = () => {
  return (
    <div className="w-full bg-black">
      <div className="max-w-[1440px] mx-auto relative py-[169px] min-h-[1649px]">
       
        <h1 className="font-[Unbounded] text-8xl text-white absolute left-[69px] top-[169px] hidden md:block">GALLERY</h1>
        
        {/* Desktop Layout */}
        <div className="hidden md:block relative w-[1240px] h-[1076px] mx-auto mt-[406px]">
          {/* Center Top - Cosmic Eye */}
          <div className="absolute w-[612px] h-[405px] left-[calc(50%-612px/2)] bottom-[671px] overflow-hidden rounded">
            <Image 
              src={cosmiceye} 
              alt="Cosmic portal with person standing" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300"
            />
          </div>
          
          {/* Left Top - Volcano */}
          <div className="absolute w-[299px] h-[449px] left-[calc(50%-299px/2-470.5px)] bottom-[420px] overflow-hidden rounded">
            <Image 
              src={volcano} 
              alt="Glowing crater" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300"
            />
          </div>
          
          {/* Center Left - Stone Face Desert */}
          <div className="absolute w-[299px] h-[250px] left-[calc(50%-299px/2-156.5px)] bottom-[410px] overflow-hidden rounded">
            <Image 
              src={stoneface} 
              alt="Fallen statue in desert" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300"
            />
          </div>
          
         {/* Far Right - Blindfolded Statue */}
          <div className="absolute w-[299px] h-[236px] left-[calc(50%-299px/2+470.5px)] bottom-[588px] overflow-hidden rounded">
            <Image 
              src={blindfold} 
              alt="Desert sunset landscape" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300"
            />
          </div>
          
          {/* Center Right - Crowned Statue */}
          <div className="absolute w-[299px] h-[404px] left-[calc(50%-299px/2+157.5px)] bottom-[252px] overflow-hidden rounded">
            <Image 
              src={crackedface} 
              alt="Crowned statue" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300"
            />
          </div>
          {/* Right Top - Desert Landscape */}
          
          <div className="absolute w-[299px] h-[449px] left-[calc(50%-299px/2+470.5px)] bottom-[120px] overflow-hidden rounded">
            <Image 
              src={desert} 
              alt="Blindfolded statue" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300"
            />
          </div>
          
          {/* Bottom Center - Rock Wall */}
          <div className="absolute w-[612px] h-[405px] left-[calc(50%-612px/2-314px)] bottom-[0px] overflow-hidden rounded">
            <Image 
              src={rockwall} 
              alt="Ancient stone masks along a wall" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300"
            />
          </div>
          
          {/* Bottom Right - Fire Face */}
          <div className="absolute w-[299px] h-[236px] left-[calc(50%-299px/2+157.5px)] bottom-[0px] overflow-hidden rounded">
            <Image 
              src={fireface} 
              alt="Face with glowing cracks" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300"
            />
          </div>
        </div>
        
        {/* Mobile Layout  */}
        <div className="md:hidden grid grid-cols-1 gap-4 max-w-[480px] mx-auto mt-[60px] px-4">
          <h1 className="font-[Unbounded] text-5xl text-white mb-8 mx-auto text-center">GALLERY</h1>
          
          <div className="relative aspect-[3/2] overflow-hidden rounded">
            <Image 
              src={cosmiceye} 
              alt="Cosmic portal with person standing" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300" 
            />
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