import React from "react";
import { Unbounded, Noto_Sans } from "next/font/google";
const unbounded = Unbounded({ weight: "400", style: "normal", preload: false });
const noto_sans = Noto_Sans({ weight: "400", style: "normal", preload: false });

const Landing = () => {
  return (
    <div className="landing-container relative flex justify-center mt-20 pt-10">
      <div className="relative w-[95%]">
        
        <video
          className="h-auto object-cover w-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/landing.mp4" type="video/mp4" />
         
         

        </video>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-8xl md:text-5xl font-unbounded drop-shadow-lg">
         <h2 className="text-8xl"><span className="mr-80 pr-40 mt-40 inline-block" > The</span>  <span className="mr-20 pt-10 inline-block">Singularity</span> <span className="pt-10 inline-block ml-20">of  </span> <span className="pt-10 ml-40 inline-block">Innovation</span> </h2>
        </div>
        
        <div className="absolute top-0 left-0 w-40 h-40 border-t-4 border-l-4 border-[#D1A83A]"></div>
        <div className="absolute top-0 right-0 w-40 h-40 border-t-4 border-r-4 border-[#D1A83A]"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 border-b-4 border-l-4 border-[#D1A83A]"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 border-b-4 border-r-4 border-[#D1A83A]"></div>
      </div>
    </div>
  );
};

export default Landing;
