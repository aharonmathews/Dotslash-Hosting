"use client"

import React, { useEffect } from "react";
import Image from "next/image";
import image1 from "../assets/Committee Call.png";
import image3 from "../assets/Frame 15.png";
import orbit from "../assets/orbit.png";
import { Unbounded, Noto_Sans } from "next/font/google";
import gsap from "gsap";
const unbounded = Unbounded({ weight: "400", style: "normal", preload: false });
const noto_sans = Noto_Sans({ weight: "400", style: "normal", preload: false });



function Events() {

  useEffect(() => {  
    gsap.to(".orbit",{
      rotate:360,
      repeat:0,
      duration:5,
      ease:'linear'
    })
  },[])


  return (
    <div className="bg-black w-full flex justify-center relative">
      {/* Orbit image positioned absolutely in top right */}
      <div className="absolute top-0 right-0 pointer-events-none z-0 opacity-30 md:opacity-100">
        <Image
          src={orbit}
          id="orbit"
          alt="orbit background"
          width={600}
          height={600}
          priority
          className="w-[300px] md:w-[600px] orbit"
        />
      </div>

      <div className="max-w-7xl w-full px-4 relative z-10">
        <div
          className={`${unbounded.className} font-normal text-[45px] md:text-[90px] leading-[100%] tracking-[0%] text-white`}
        >
          UPCOMING
        </div>
        <div
          className={`${unbounded.className} font-normal text-[45px] md:text-[90px] leading-[100%] tracking-[0%] text-white`}
        >
          EVENTS
        </div>
        <div className="flex flex-col gap-6 md:gap-12 mt-5 md:mt-10">
          {/* First row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-5 md:mt-10">
            {/* First card - reference for bigger cards */}
            <div className="w-full md:w-[800px] h-auto md:h-[380px] bg-black border border-[#D1A83A] rounded-md p-4 md:pt-5 md:pl-4 flex flex-col md:flex-row relative">
              {/* Small button on upper border */}
              <div className="absolute -top-4 right-4 md:right-40">
                <div className="h-[30px] w-[120px] md:w-[150px] bg-[#D1A83A] rounded-[45px] flex justify-center items-center">
                  <span
                    className={`text-black ${unbounded.className} text-xs md:text-sm`}
                  >
                    FEATURED
                  </span>
                </div>
              </div>

              <div className="w-full md:w-[280px] h-[220px] md:h-[330px] bg-black border border-gray-500 rounded-md mx-auto md:mx-0">
                <Image
                  src={image1}
                  alt="countdown"
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col w-full md:w-[500px] mt-4 md:mt-0">
                <div
                  className={`text-[#D1A83A] ${unbounded.className} pl-2 md:pl-6 pt-4 md:pt-8 text-xl md:text-2xl`}
                >
                  Project Expo
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-2 md:pl-6 pt-2 md:pt-4 text-sm flex flex-col gap-2 md:gap-4`}
                >
                  <span>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quo voluptatum? Cupiditate soluta nam quam mollitia? Eligendi nostrum voluptas, et corrupti assumenda quasi atque? Et qui facere laborum expedita maxime!
                  </span>

                  <span className=" md:block">
                    Ullamcorper lectus duis sed in amet. Volutpat eros ut augue
                    lacus commodo. Nulla dui volutpat in a non faucibus arcu in.
                    Ullamcorper lectus duis sed in amet.
                  </span>
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-2 md:pl-8 pt-3 md:pt-4 text-sm flex flex-row justify-between md:justify-start md:gap-40`}
                >
                  <Image
                    src={image3}
                    alt="countdown"
                    className="w-16 h-20 md:w-20 md:h-24"
                    priority
                  />
                    <div className="h-[40px] md:h-[50px] w-[150px] md:w-[205px] bg-[#D1A83A] rounded-[45px] flex justify-center items-center md:mt-10">
                  <a href="">
                      <span
                        className={`text-black ${unbounded.className} text-xs md:text-sm`}
                      >
                        REGISTER
                      </span>
                  </a>
                    </div>
                </div>
              </div>
            </div>

            {/* Second card - reference for smaller cards */}
            <div className="w-full md:w-[420px] h-auto md:h-[380px] bg-black border border-[#D1A83A] rounded-md p-4 md:p-0">
              <div className="flex flex-col w-full md:w-[400px]">
                <div
                  className={`text-white ${unbounded.className} pl-2 md:pl-8 pt-2 md:pt-8 text-xl md:text-2xl`}
                >
                  Project Expo
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-2 md:pl-8 pt-2 md:pt-4 text-sm flex flex-col gap-2 md:gap-4`}
                >
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla
                    justo. Dui lectus venenatis ut nisl.
                  </span>

                  <span className=" md:block">
                    Ullamcorper lectus duis sed in amet. Volutpat eros ut augue
                    lacus commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus amet est minus blanditiis libero temporibus modi, beatae incidunt nostrum sapiente aspernatur 
                  </span>
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-2 md:pl-8 pt-4 md:pt-9 text-sm flex flex-row justify-between md:justify-start md:gap-24`}
                >
                  <Image
                    src={image3}
                    alt="countdown"
                    className="w-16 h-20 md:w-20 md:h-24"
                    priority
                  />
                  <div className="h-[40px] md:h-[50px] w-[120px] md:w-[165px] bg-[#D1A83A] rounded-[45px] flex justify-center items-center md:mt-10">
                    <a href="">
                      <span
                        className={`text-black ${unbounded.className} text-xs md:text-sm`}
                      >
                        REGISTER
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-5 md:mt-10">
            {/* Small card matching the second reference card */}
            <div className="w-full md:w-[420px] h-auto md:h-[380px] bg-black border border-[#D1A83A] rounded-md p-4 md:p-0">
              <div className="flex flex-col w-full md:w-[400px]">
                <div
                  className={`text-white ${unbounded.className} pl-2 md:pl-8 pt-2 md:pt-8 text-xl md:text-2xl`}
                >
                  Project Expo
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-2 md:pl-8 pt-2 md:pt-4 text-sm flex flex-col gap-2 md:gap-4`}
                >
                 <span>
                    Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla
                    justo. Dui lectus venenatis ut nisl.
                  </span>

                  <span className=" md:block">
                    Ullamcorper lectus duis sed in amet. Volutpat eros ut augue
                    lacus commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus amet est minus blanditiis libero temporibus modi, beatae incidunt nostrum sapiente aspernatur 
                  </span>
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-2 md:pl-8 pt-4 md:pt-9 text-sm flex flex-row justify-between md:justify-start md:gap-24`}
                >
                  <Image
                    src={image3}
                    alt="countdown"
                    className="w-16 h-20 md:w-20 md:h-24"
                    priority
                  />
                  <div className="h-[40px] md:h-[50px] w-[120px] md:w-[165px] bg-[#D1A83A] rounded-[45px] flex justify-center items-center md:mt-10">
                    <a href="">
                      <span
                        className={`text-black ${unbounded.className} text-xs md:text-sm`}
                      >
                        REGISTER
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Big card matching the first reference card */}
            <div className="w-full md:w-[800px] h-auto md:h-[380px] bg-black border border-[#D1A83A] rounded-md p-4 md:pt-5 md:pl-4 flex flex-col md:flex-row">
              <div className="w-full md:w-[280px] h-[220px] md:h-[330px] bg-black border border-gray-500 rounded-md mx-auto md:mx-0">
                <Image
                  src={image1}
                  alt="countdown"
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col w-full md:w-[500px] mt-4 md:mt-0">
                <div
                  className={`text-gold ${unbounded.className} pl-2 md:pl-6 pt-4 md:pt-8 text-xl md:text-2xl`}
                >
                  Project Expo
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-2 md:pl-6 pt-2 md:pt-4 text-sm flex flex-col gap-2 md:gap-4`}
                >
                 <span>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quo voluptatum? Cupiditate soluta nam quam mollitia? Eligendi nostrum voluptas, et corrupti assumenda quasi atque? Et qui facere laborum expedita maxime!
                  </span>

                  <span className="md:block">
                    Ullamcorper lectus duis sed in amet. Volutpat eros ut augue
                    lacus commodo. Nulla dui volutpat in a non faucibus arcu in.
                    Ullamcorper lectus duis sed in amet.
                  </span>
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-2 md:pl-8 pt-3 md:pt-4 text-sm flex flex-row justify-between md:justify-start md:gap-40`}
                >
                  <Image
                    src={image3}
                    alt="countdown"
                    className="w-16 h-20 md:w-20 md:h-24"
                    priority
                  />
                  <div className="h-[40px] md:h-[50px] w-[150px] md:w-[205px] bg-[#D1A83A] rounded-[45px] flex justify-center items-center md:mt-10">
                    <a href="">
                      <span
                        className={`text-black ${unbounded.className} text-xs md:text-sm`}
                      >
                        REGISTER
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-5 mt-5 md:mt-10">
            {/* Three small cards, all the same format */}
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="w-full md:w-[420px] h-auto md:h-[380px] bg-black border border-[#D1A83A] rounded-md p-4 md:p-0"
              >
                <div className="flex flex-col w-full md:w-[400px]">
                  <div
                    className={`text-white ${unbounded.className} pl-2 md:pl-8 pt-2 md:pt-8 text-xl md:text-2xl`}
                  >
                    Project Expo
                  </div>
                  <div
                    className={`text-white ${noto_sans.className} pl-2 md:pl-8 pt-2 md:pt-4 text-sm flex flex-col gap-2 md:gap-4`}
                  >
                   <span>
                    Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla
                    justo. Dui lectus venenatis ut nisl.
                  </span>

                  <span className=" md:block">
                    Ullamcorper lectus duis sed in amet. Volutpat eros ut augue
                    lacus commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus amet est minus blanditiis libero temporibus modi, beatae incidunt nostrum sapiente aspernatur 
                  </span>
                  </div>
                  <div
                    className={`text-white ${noto_sans.className} pl-2 md:pl-8 pt-4 md:pt-9 text-sm flex flex-row justify-between md:justify-start md:gap-24`}
                  >
                    <Image
                      src={image3}
                      alt="countdown"
                      className="w-16 h-20 md:w-20 md:h-24"
                      priority
                    />
                    <div className="h-[40px] md:h-[50px] w-[120px] md:w-[165px] bg-[#D1A83A] rounded-[45px] flex justify-center items-center md:mt-10">
                      <a href="">
                        <span
                          className={`text-black ${unbounded.className} text-xs md:text-sm`}
                        >
                          REGISTER
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
