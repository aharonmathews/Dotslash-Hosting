"use client"

import React, { useEffect, useState } from "react";
import { Space_Mono } from "next/font/google";
import dynamic from "next/dynamic";

// Use dynamic import with no SSR for the ShaderCanvas component
const ShaderCanvas = dynamic(() => import("./shaderCanvas"), { ssr: false });

// Font loading fixed
const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  weight: ["400"]
});

interface TimeLeft {
  days?: string;
  hours?: string;
  minutes?: string;
  seconds?: string;
}

const CountDown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

  // Devfolio script loading
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function calculateTimeLeft(): TimeLeft {
    const difference = +new Date("2025-03-26T17:00:00") - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]); // Added timeLeft as dependency to ensure timer updates correctly

  return (
    <main className="relative flex items-center justify-center h-[658px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <ShaderCanvas image="/countdown.png" />
      </div>
      <div className="border-t-2 border-l-2 border-slate-300 w-20 h-20 absolute top-5 left-5 z-20"></div>
      <div className="border-b-2 border-l-2 border-slate-300 w-20 h-20 absolute bottom-5 left-5 z-20"></div>
      <div className="border-t-2 border-r-2 border-slate-300 w-20 h-20 absolute top-5 right-5 z-20"></div>
      <div className="border-b-2 border-r-2 border-slate-300 w-20 h-20 absolute bottom-5 right-5 z-20"></div>
      <p className="absolute bottom-7 left-10">REBOOTING...</p>
      <div className="absolute bottom-7 right-10 flex flex-col items-end">
        <p className="mb-1 text-sm opacity-80">RESTARTING IN:</p>
        <h3 className={`${spaceMono.className} text-xl md:text-5xl`}>
          {timeLeft.days || "00"}:{timeLeft.hours || "00"}:{timeLeft.minutes || "00"}:{timeLeft.seconds || "00"}
        </h3>
      </div>
    </main>
  );
};

export default CountDown;