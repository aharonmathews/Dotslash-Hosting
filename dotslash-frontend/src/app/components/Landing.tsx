import React from "react";
import landing from "../assets/landing.png";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="image-container mt-20 pt-10">
             <video
        className="h-auto  object-cover w-[95%] mx-auto"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/landing.mp4" type="video/mp4" />
      
      </video>

      </div>
    </div>
  );
};

export default Landing;
