import React from "react";
import Image from "next/image";
import image1 from "../assets/Committee Call.png";
import image3 from "../assets/Frame 15.png";
import orbit from "../assets/orbit.png";
import { Unbounded, Noto_Sans } from "next/font/google";
const unbounded = Unbounded({ weight: "400", style: "normal", preload: false });
const noto_sans = Noto_Sans({ weight: "400", style: "normal", preload: false });

function events() {
  return (
    <div className="bg-black w-full flex justify-center relative">
      {/* Orbit image positioned absolutely in top right */}
      <div className="absolute top-0 right-0  pointer-events-none z-0">
        <Image
          src={orbit}
          alt="orbit background"
          width={600}
          height={600}
          priority
        />
      </div>

      <div className="max-w-7xl w-full px-4 relative z-10">
        <div
          className={`${unbounded.className} font-normal text-[90px] leading-[100%] tracking-[0%] text-white`}
        >
          UPCOMING
        </div>
        <div
          className={`${unbounded.className} font-normal text-[90px] leading-[100%] tracking-[0%] text-white`}
        >
          EVENTS
        </div>
        <div className="flex flex-col gap-12 mt-10">
          {/* First row */}
          <div className="flex flex-row gap-12 mt-10">
            {/* First card - reference for bigger cards */}
            <div className="w-[800px] h-[380px] bg-black border border-[#D1A83A] rounded-md pt-5 pl-4 flex flex-row relative">
              {/* Small button on upper border */}
              <div className="absolute -top-4 right-40">
                <div className="h-[30px] w-[150px] bg-[#D1A83A] rounded-[45px] flex justify-center items-center">
                  <span
                    className={`text-black ${noto_sans.className} text-sm`}
                  >
                    FEATURED
                  </span>
                </div>
              </div>

              <div className="w-[280px] h-[330px] bg-black border border-gray-500 rounded-md ">
                <Image
                  src={image1}
                  alt="countdown"
                  className="w-72 h-80 "
                  priority
                />
              </div>
              <div className="flex flex-col w-[500px]">
                <div
                  className={`text-[#D1A83A] ${unbounded.className} pl-6 pt-8 text-2xl`}
                >
                  Project Expo
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-6 pt-4 text-sm flex flex-col gap-4`}
                >
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla
                    justo. Dui lectus venenatis ut nisl. Ut eu vivamus turpis
                    commodo vitae viverra.. Auctor vel ut sagittis viverra.
                    Sollicitudin interdum amet sit orci facilisis et..
                  </span>

                  <span>
                    Ullamcorper lectus duis sed in amet.. Volutpat eros ut augue
                    lacus commodo.. Nulla dui volutpat in a non faucibus arcu
                    in.. Massa molestie quis morbi id sit dictum odio diam
                    elit..
                  </span>
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-8 pt-4 text-sm flex flex-row gap-40`}
                >
                  <Image
                    src={image3}
                    alt="countdown"
                    className="w-20 h-24"
                    priority
                  />
                  <a href="">
                    <div className="md:h-[50px] md:w-[205px] bg-[#D1A83A] rounded-[45px] flex justify-center items-center mt-10">
                      <span
                        className={`text-black ${unbounded.className} text-sm`}
                      >
                        REGISTER
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div />
            </div>

            {/* Second card - reference for smaller cards */}
            <div className="w-[420px] h-[380px] bg-black border border-gray-500 ] rounded-md">
              <div className="flex flex-col w-[400px]">
                <div
                  className={`text-white ${unbounded.className} pl-8 pt-8 text-2xl`}
                >
                  Project Expo
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-8 pt-4 text-sm flex flex-col gap-4`}
                >
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla
                    justo. Dui lectus venenatis ut nisl. Ut eu vivamus turpis
                    commodo vitae viverra.. Auctor vel ut sagittis viverra.
                  </span>

                  <span>
                    Ullamcorper lectus duis sed in amet.. Volutpat eros ut augue
                    lacus commodo.. Nulla dui volutpat in a non faucibus arcu
                    in..
                  </span>
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-8 pt-9 text-sm flex flex-row gap-24`}
                >
                  <Image
                    src={image3}
                    alt="countdown"
                    className="w-20 h-24"
                    priority
                  />
                  <div className="md:h-[50px] md:w-[165px] bg-[#D1A83A] rounded-[45px] flex justify-center items-center mt-10">
                    <a href="">
                      <span
                        className={`text-black ${unbounded.className} text-sm`}
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
          <div className="flex flex-row gap-12 mt-10">
            {/* Small card matching the second reference card */}
            <div className="w-[420px] h-[380px] bg-black border border-gray-500 rounded-md">
              <div className="flex flex-col w-[400px]">
                <div
                  className={`text-white ${unbounded.className} pl-8 pt-8 text-2xl`}
                >
                  Project Expo
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-8 pt-4 text-sm flex flex-col gap-4`}
                >
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla
                    justo. Dui lectus venenatis ut nisl. Ut eu vivamus turpis
                    commodo vitae viverra.. Auctor vel ut sagittis viverra.
                  </span>

                  <span>
                    Ullamcorper lectus duis sed in amet.. Volutpat eros ut augue
                    lacus commodo.. Nulla dui volutpat in a non faucibus arcu
                    in..
                  </span>
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-8 pt-9 text-sm flex flex-row gap-24`}
                >
                  <Image
                    src={image3}
                    alt="countdown"
                    className="w-20 h-24"
                    priority
                  />
                  <div className="md:h-[50px] md:w-[165px] bg-[#D1A83A] rounded-[45px] flex justify-center items-center mt-10">
                    <a href="">
                      <span
                        className={`text-black ${unbounded.className} text-sm`}
                      >
                        REGISTER
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Big card matching the first reference card */}
            <div className="w-[800px] h-[380px] bg-black border border-gray-500  rounded-md pt-5 pl-4 flex flex-row">
              <div className="w-[280px] h-[330px] bg-black border border-gray-500 rounded-md ">
                <Image
                  src={image1}
                  alt="countdown"
                  className="w-72 h-80"
                  priority
                />
              </div>
              <div className="flex flex-col w-[500px]">
                <div
                  className={`text-gold ${unbounded.className} pl-6 pt-8 text-2xl`}
                >
                  Project Expo
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-6 pt-4 text-sm flex flex-col gap-4`}
                >
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla
                    justo. Dui lectus venenatis ut nisl. Ut eu vivamus turpis
                    commodo vitae viverra.. Auctor vel ut sagittis viverra.
                    Sollicitudin interdum amet sit orci facilisis et..
                  </span>

                  <span>
                    Ullamcorper lectus duis sed in amet.. Volutpat eros ut augue
                    lacus commodo.. Nulla dui volutpat in a non faucibus arcu
                    in.. Massa molestie quis morbi id sit dictum odio diam
                    elit..
                  </span>
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-8 pt-4 text-sm flex flex-row gap-40`}
                >
                  <Image
                    src={image3}
                    alt="countdown"
                    className="w-20 h-24"
                    priority
                  />
                  <div className="md:h-[50px] md:w-[205px] bg-[#D1A83A] rounded-[45px] flex justify-center items-center mt-10">
                    <a href="">
                      <span
                        className={`text-black ${unbounded.className} text-sm`}
                      >
                        REGISTER
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div />
            </div>
          </div>

          {/* Third row */}
          <div className="flex flex-row gap-5 mt-10">
            {/* Small card matching the second reference card */}
            <div className="w-[420px] h-[380px] bg-black border border-gray-500  rounded-md">
              <div className="flex flex-col w-[400px]">
                <div
                  className={`text-white ${unbounded.className} pl-8 pt-8 text-2xl`}
                >
                  Project Expo
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-8 pt-4 text-sm flex flex-col gap-4`}
                >
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla
                    justo. Dui lectus venenatis ut nisl. Ut eu vivamus turpis
                    commodo vitae viverra.. Auctor vel ut sagittis viverra.
                  </span>

                  <span>
                    Ullamcorper lectus duis sed in amet.. Volutpat eros ut augue
                    lacus commodo.. Nulla dui volutpat in a non faucibus arcu
                    in..
                  </span>
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-8 pt-9 text-sm flex flex-row gap-24`}
                >
                  <Image
                    src={image3}
                    alt="countdown"
                    className="w-20 h-24"
                    priority
                  />
                  <div className="md:h-[50px] md:w-[165px] bg-[#D1A83A] rounded-[45px] flex justify-center items-center mt-10">
                    <a href="">
                      <span
                        className={`text-black ${unbounded.className} text-sm`}
                      >
                        REGISTER
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Small card matching the second reference card */}
            <div className="w-[420px] h-[380px] bg-black border border-gray-500 rounded-md">
              <div className="flex flex-col w-[400px]">
                <div
                  className={`text-white ${unbounded.className} pl-8 pt-8 text-2xl`}
                >
                  Project Expo
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-8 pt-4 text-sm flex flex-col gap-4`}
                >
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla
                    justo. Dui lectus venenatis ut nisl. Ut eu vivamus turpis
                    commodo vitae viverra.. Auctor vel ut sagittis viverra.
                  </span>

                  <span>
                    Ullamcorper lectus duis sed in amet.. Volutpat eros ut augue
                    lacus commodo.. Nulla dui volutpat in a non faucibus arcu
                    in..
                  </span>
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-8 pt-9 text-sm flex flex-row gap-24`}
                >
                  <Image
                    src={image3}
                    alt="countdown"
                    className="w-20 h-24"
                    priority
                  />
                  <div className="md:h-[50px] md:w-[165px] bg-[#D1A83A] rounded-[45px] flex justify-center items-center mt-10">
                    <a href="">
                      <span
                        className={`text-black ${unbounded.className} text-sm`}
                      >
                        REGISTER
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Small card matching the second reference card */}
            <div className="w-[420px] h-[380px] bg-black border border-gray-500 rounded-md">
              <div className="flex flex-col w-[400px]">
                <div
                  className={`text-white ${unbounded.className} pl-8 pt-8 text-2xl`}
                >
                  Project Expo
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-8 pt-4 text-sm flex flex-col gap-4`}
                >
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla
                    justo. Dui lectus venenatis ut nisl. Ut eu vivamus turpis
                    commodo vitae viverra.. Auctor vel ut sagittis viverra.
                  </span>

                  <span>
                    Ullamcorper lectus duis sed in amet.. Volutpat eros ut augue
                    lacus commodo.. Nulla dui volutpat in a non faucibus arcu
                    in..
                  </span>
                </div>
                <div
                  className={`text-white ${noto_sans.className} pl-8 pt-9 text-sm flex flex-row gap-24`}
                >
                  <Image
                    src={image3}
                    alt="countdown"
                    className="w-20 h-24"
                    priority
                  />
                  <div className="md:h-[50px] md:w-[165px] bg-[#D1A83A] rounded-[45px] flex justify-center items-center mt-10">
                    <a href="">
                      <span
                        className={`text-black ${unbounded.className} text-sm`}
                      >
                        REGISTER
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default events;
