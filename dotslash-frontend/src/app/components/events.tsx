import React from 'react'
import Image from "next/image"
import image1 from '../assets/Committee Call.png'
import image2 from '../assets/Frame 14.png'
import image3 from "../assets/Frame 15.png"

function events() {
  return (
    <div className='bg-black p-10 w-[1520px] ml-8'>
      <div className="font-unbounded font-normal text-[90px] leading-[100%] tracking-[0%] text-white">
        UPCOMING
      </div>
      <div className="font-unbounded font-normal text-[90px] leading-[100%] tracking-[0%] text-white">
        EVENTS
      </div>
   <div className='flex flex-col gap-12 mt-10'>
  <div className='flex flex-row gap-12 mt-10'>   
    <div className="w-[800px] h-[350px] bg-black border border-gold rounded-md pt-2 pl-4 flex flex-row">
        
            <div className="w-[280px] h-[330px] bg-black border border-gray-500 rounded-md ">
                <Image src={image1} alt="countdown" className='w-72 h-80' priority />
            </div>
                <div className='flex flex-col w-[500px]'> 
                    <div className='text-gold font-unbounded pl-8 pt-8 text-2xl'>
                            Project Expo
                    </div>
                    <div className='text-white font-noto-sans pl-8 pt-4 text-sm flex flex-col gap-4'>
                        <span>Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo. Dui lectus venenatis ut nisl. Ut eu vivamus turpis commodo vitae viverra.. Auctor vel ut sagittis viverra. Sollicitudin interdum amet sit orci facilisis et..</span>

                        <span>Ullamcorper lectus duis sed in amet.. Volutpat eros ut augue lacus commodo.. Nulla dui volutpat in a non faucibus arcu in.. Massa molestie quis morbi id sit dictum odio diam elit..</span>
                    </div>
                    <div className='text-white font-noto-sans pl-8 pt-4 text-sm flex flex-row gap-40  '>
                            <Image src={image3} alt="countdown" className='w-20 h-24' priority />
                            <Image src={image2} alt="countdown" className='w-48 h-12 mt-10 ' priority />
                    </div>
                </div>
    <div/>
           
        
      
    </div>
    <div className='w-[420px] h-[350px] bg-black border border-gray-500 rounded-md'>
            <div className='flex flex-col w-[400px]'> 
                <div className='text-white font-unbounded pl-8 pt-8 text-2xl'>
                        Project Expo
                </div>
                <div className='text-white font-noto-sans pl-8 pt-4 text-sm flex flex-col gap-4'>
                    <span>Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo. Dui lectus venenatis ut nisl. Ut eu vivamus turpis commodo vitae viverra.. Auctor vel ut sagittis viverra.</span>

                    <span>Ullamcorper lectus duis sed in amet.. Volutpat eros ut augue lacus commodo.. Nulla dui volutpat in a non faucibus arcu in..</span>
                </div>
                <div className='text-white font-noto-sans pl-8 pt-4 text-sm flex flex-row gap-24  '>
                        <Image src={image3} alt="countdown" className='w-20 h-24' priority />
                        <Image src={image2} alt="countdown" className='w-48 h-12 mt-10 ' priority />
                </div>
            </div>
    </div>
        
    </div> 
    <div className='flex flex-row gap-12 mt-10'> 
    <div className='w-[420px] h-[350px] bg-black border border-gray-500 rounded-md'>
            <div className='flex flex-col w-[400px]'> 
                <div className='text-white font-unbounded pl-8 pt-8 text-2xl'>
                        Project Expo
                </div>
                <div className='text-white font-noto-sans pl-8 pt-4 text-sm flex flex-col gap-4'>
                    <span>Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo. Dui lectus venenatis ut nisl. Ut eu vivamus turpis commodo vitae viverra.. Auctor vel ut sagittis viverra.</span>

                    <span>Ullamcorper lectus duis sed in amet.. Volutpat eros ut augue lacus commodo.. Nulla dui volutpat in a non faucibus arcu in..</span>
                </div>
                <div className='text-white font-noto-sans pl-8 pt-4 text-sm flex flex-row gap-24  '>
                        <Image src={image3} alt="countdown" className='w-20 h-24' priority />
                        <Image src={image2} alt="countdown" className='w-48 h-12 mt-10 ' priority />
                </div>
            </div>
    </div>  
    <div className="w-[800px] h-[350px] bg-black border border-gray-500 rounded-md pt-2 pl-4 flex flex-row">
        
            <div className="w-[280px] h-[330px] bg-black border border-gray-500 rounded-md ">
                <Image src={image1} alt="countdown" className='w-72 h-80' priority />
            </div>
                <div className='flex flex-col w-[500px]'> 
                    <div className='text-white font-unbounded pl-8 pt-8 text-2xl'>
                            Project Expo
                    </div>
                    <div className='text-white font-noto-sans pl-8 pt-4 text-sm flex flex-col gap-4'>
                        <span>Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo. Dui lectus venenatis ut nisl. Ut eu vivamus turpis commodo vitae viverra.. Auctor vel ut sagittis viverra. Sollicitudin interdum amet sit orci facilisis et..</span>

                        <span>Ullamcorper lectus duis sed in amet.. Volutpat eros ut augue lacus commodo.. Nulla dui volutpat in a non faucibus arcu in.. Massa molestie quis morbi id sit dictum odio diam elit..</span>
                    </div>
                    <div className='text-white font-noto-sans pl-8 pt-4 text-sm flex flex-row gap-40  '>
                            <Image src={image3} alt="countdown" className='w-20 h-24' priority />
                            <Image src={image2} alt="countdown" className='w-48 h-12 mt-10 ' priority />
                    </div>
                </div>
            <div/>     
    </div>  
    </div> 
    <div className='flex flex-row gap-12 mt-10'>   
    
    <div className='w-[420px] h-[350px] bg-black border border-gray-500 rounded-md'>
            <div className='flex flex-col w-[400px]'> 
                <div className='text-white font-unbounded pl-8 pt-8 text-2xl'>
                        Project Expo
                </div>
                <div className='text-white font-noto-sans pl-8 pt-4 text-sm flex flex-col gap-4'>
                    <span>Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo. Dui lectus venenatis ut nisl. Ut eu vivamus turpis commodo vitae viverra.. Auctor vel ut sagittis viverra.</span>

                    <span>Ullamcorper lectus duis sed in amet.. Volutpat eros ut augue lacus commodo.. Nulla dui volutpat in a non faucibus arcu in..</span>
                </div>
                <div className='text-white font-noto-sans pl-8 pt-4 text-sm flex flex-row gap-24  '>
                        <Image src={image3} alt="countdown" className='w-20 h-24' priority />
                        <Image src={image2} alt="countdown" className='w-48 h-12 mt-10 ' priority />
                </div>
            </div>
    </div>
    <div className='w-[420px] h-[350px] bg-black border border-gray-500 rounded-md'>
            <div className='flex flex-col w-[400px]'> 
                <div className='text-white font-unbounded pl-8 pt-8 text-2xl'>
                        Project Expo
                </div>
                <div className='text-white font-noto-sans pl-8 pt-4 text-sm flex flex-col gap-4'>
                    <span>Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo. Dui lectus venenatis ut nisl. Ut eu vivamus turpis commodo vitae viverra.. Auctor vel ut sagittis viverra.</span>

                    <span>Ullamcorper lectus duis sed in amet.. Volutpat eros ut augue lacus commodo.. Nulla dui volutpat in a non faucibus arcu in..</span>
                </div>
                <div className='text-white font-noto-sans pl-8 pt-4 text-sm flex flex-row gap-24  '>
                        <Image src={image3} alt="countdown" className='w-20 h-24' priority />
                        <Image src={image2} alt="countdown" className='w-48 h-12 mt-10 ' priority />
                </div>
            </div>
    </div>
    <div className='w-[420px] h-[350px] bg-black border border-gray-500 rounded-md'>
            <div className='flex flex-col w-[400px]'> 
                <div className='text-white font-unbounded pl-8 pt-8 text-2xl'>
                        Project Expo
                </div>
                <div className='text-white font-noto-sans pl-8 pt-4 text-sm flex flex-col gap-4'>
                    <span>Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo. Dui lectus venenatis ut nisl. Ut eu vivamus turpis commodo vitae viverra.. Auctor vel ut sagittis viverra.</span>

                    <span>Ullamcorper lectus duis sed in amet.. Volutpat eros ut augue lacus commodo.. Nulla dui volutpat in a non faucibus arcu in..</span>
                </div>
                <div className='text-white font-noto-sans pl-8 pt-4 text-sm flex flex-row gap-24  '>
                        <Image src={image3} alt="countdown" className='w-20 h-24' priority />
                        <Image src={image2} alt="countdown" className='w-48 h-12 mt-10 ' priority />
                </div>
            </div>
    </div>
        
    </div> 
  </div>
</div>
  )
}

export default events
