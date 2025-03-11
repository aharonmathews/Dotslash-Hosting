"use client";
import React from "react";
import logo from "@/app/assets/logo.gif";
import dsolve from "@/app/assets/DSolve.png";
import dotnight from "@/app/assets/dotnight.png";
import Image from "next/image";
import { Noto_Sans } from "next/font/google";

const noto = Noto_Sans({ subsets: ["latin"], weight: ["400"] });

const NotJustAFest = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-fit my-[100px]">
      <div className="w-[1054px] h-[1054px] absolute radial-gradient opacity-50"></div>
      <div className="absolute font-unbounded w-[140px] md:w-[186px] rounded-lg py-1 px-1 md:px-4 top-[105px] md:top-1/4 left-12 md:left-[30%] bg-white/5 border border-slate-700 backdrop-blur-lg z-20">
        <p className="text-xs md:text-base">Panel Discussions</p>
      </div>
      <div className="absolute font-unbounded w-[90px]  md:w-[186px] rounded-lg py-1 px-1 md:px-4 top-[160px] md:top-1/3  right-7 md:right-1/4 bg-white/5 border border-slate-700 backdrop-blur-lg z-20">
        <p className="text-xs md:text-base">Workshops</p>
      </div>
      <div className="absolute font-unbounded w-[110px] md:w-[186px] rounded-lg py-1 px-1 md:px-4 top-[65%] md:top-[60%] left-1/4 bg-white/5 border border-slate-700 backdrop-blur-lg z-20">
        <p className="text-xs md:text-base">Talk Sessions</p>
      </div>
      <div className="absolute font-unbounded w-[92px] md:w-[200px] rounded-lg py-1 px-1 pb-3 top-[180px] md:top-[37%] left-2 md:left-[15%] bg-white/5 border border-slate-700 backdrop-blur-lg z-20">
        <Image src={dsolve} alt="DotSlash Logo" className="w-[82px] md:w-[190px]" />
        <p className="mt-2 text-xs md:text-base">D Solve</p>
        <p className={`${noto.className} text-[10px] md:text-xs mt-1 opacity-80`}>
          Nulla dui volutpat in a non faucibus arcu in.. Massa molestie quis
          morbi id sit dictum odio diam elit..
        </p>
      </div>
      <div className="absolute font-unbounded w-[92px] md:w-[200px] rounded-lg py-1 px-1 pb-3  top-[250px] md:top-[50%] right-2 md:right-[25%] bg-white/5 border border-slate-700 backdrop-blur-lg z-20">
        <Image src={dotnight} alt="DotSlash Logo" className="w-[82px] md:w-[190px]" />
        <p className="mt-2 text-xs md:text-base">DotNight</p>
        <p className={`${noto.className}  text-[10px] md:text-xs mt-1 opacity-80`}>
          Nulla dui volutpat in a non faucibus arcu in.. Massa molestie quis
          morbi id sit dictum odio diam elit..
        </p>
      </div>
      <div className="mt-[10px] md:mt-4 w-[130vw] h-[130vw] max-w-[1216px] max-h-[1216px] flex items-center justify-center rounded-full border-2 border-[#D1A83A66]">
        <div className="w-[100vw] h-[100vw] max-w-[854px] max-h-[854px] flex items-center justify-center rounded-full border-2 border-[#D1A83A66]">
          <div className="w-[86vw] h-[86vw] max-w-[686px] max-h-[686px] flex items-center justify-center rounded-full border-2 border-[#D1A83AB2]">
            <div className="w-[73vw] h-[73vw] max-w-[582px] max-h-[582px] flex items-center justify-center rounded-full border-2 border-[#D1A83A]">
              <div className="w-[58vw] h-[58vw] max-w-[486px] max-h-[486px] flex items-center justify-center rounded-full border-2 border-[#D1A83A]">
                <div className="w-[42vw] h-[42vw] max-w-[366px] max-h-[366px] flex items-center justify-center rounded-full border-2 border-[#D1A83A]">
                  <Image
                    src={logo}
                    alt="DotSlash Logo"
                    className="w-[38vw] max-w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="absolute top-[-30px] md:top-10 font-unbounded uppercase leading-tight font-[400] text-[46px] md:text-[96px] text-center w-[340px] md:w-[580px]">
        Not just a <b className="font-[400] text-[#D1A83A]">fest</b>
      </p>
      <p className="absolute bottom-[60px] md:bottom-[10%] font-unbounded uppercase leading-tight font-[400] text-[46px] md:text-[96px] text-center w-[420px] md:w-[722px]">
        The power to <b className="font-[400] text-[#D1A83A]">explore</b>
      </p>

      <p className=" font-unbounded w-[340px] max-w-[700px] font-[300] text-[14px] md:text-[20px] text-center mt-[80px] md:mt-[50px]">
        Lorem ipsum dolor sit amet consectetur. Auctor dignissim massa urna dui.
        Neque at sed tellus cursus posuere..
      </p>
    </div>
  );
};

export default NotJustAFest;
