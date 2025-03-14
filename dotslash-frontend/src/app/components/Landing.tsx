import React from "react";
import landing from "../assets/landing.png";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="image-container">
        <Image
          src={landing}
          alt="Landing"
          className="responsive-image mt-20 pt-5 w-[95%] mx-auto "
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

export default Landing;
