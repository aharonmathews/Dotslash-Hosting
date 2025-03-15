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
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-8xl md:text-4xl font-unbounded drop-shadow-lg">
         <h2 className="text-3xl lg:text-8xl sm:text-4xl md:text-5xl"><span className="lg:mr-80    pr-[125px] lg:pr-40 md:mr-20 sm:pr-20 mt-20 lg:mt-40 md:mt-20 sm:mt-20  inline-block" > The</span>  <span className="lg:mr-20  lg:pt-10  inline-block">Singularity</span> <span className="lg:pt-10 inline-block ml-20">of  </span> <span className="lg:pt-10 lg:ml-40 inline-block">Innovation</span> </h2>
        </div>
        
        <div className="absolute top-0 left-0 w-16 h-16 lg:w-40 lg:h-40 lg:w-40 lg:h-40 md:w-10 md:h-10 border-t-4 border-l-4 border-[#D1A83A]"></div>
        <div className="absolute top-0 right-0 w-16 h-16 lg:w-40 lg:h-40 md:w-10 md:h-10 border-t-4 border-r-4 border-[#D1A83A]"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 lg:w-40 lg:h-40 md:w-10 md:h-10 border-b-4 border-l-4 border-[#D1A83A]"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 lg:w-40 lg:h-40 md:w-10 md:h-10 border-b-4 border-r-4 border-[#D1A83A]"></div>
      </div>
    </div>
  );
};

export default Landing;
