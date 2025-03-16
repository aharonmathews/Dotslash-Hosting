"use client"
import Image from "next/image";
import TshirtImage from "../assets/dotshirt.png";
import Tbackground from "../assets/Tbackground.png";
import { Unbounded } from "next/font/google";
import ShaderCanvas from "./shaderCanvas";
import HoverButton from "./HoverButton";
import { motion } from "framer-motion";
import { paragraphVariants } from "../lib/ParagraphAnimation";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["400", "700"] });

export default function Tshirt() {
  return (
    <div id="tshirt" className="relative z-10 md:w-full h-screen inset-0 flex flex-col items-start justify-start text-white">
      <div className="absolute left-1/2 -translate-x-1/2 inset-0 md:w-full w-[600px] md:h-[800px] h-full bg-cover">
        <ShaderCanvas image="/Tbackground.png" />{/* 
        <div className="absolute inset-0 w-screen bg-black opacity-40 "></div> */}
      </div>

      <div className="relative flex md:flex-row flex-col justify-between max-sm:py-0 p-6 h-full w-full pt-12 mt-7 md:mt-12">
        <div className="text-left mb-10  md:ml-10 md:pl-10 h-full">
          <h1 className={`md:text-6xl xl:text-8xl text-4xl ${unbounded.className} mb-5`}>
            GRAB YOUR <br />
            <span className="md:mt-5 block">TEES</span>
          </h1>

          <div className="text-slate-200 text-sm lg:text-base leading-relaxed mt-4  md:w-[43%] w-[350px]">
            <motion.div
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              DotSlash &apos;25 merch is here! This isn&apos;t just a T-shirt — it&apos;s a badge of honor, a symbol of the electrifying energy that defines the fest. Designed for those who live and breathe tech, it&apos;s bold, exclusive, and built to make a statement. Whether you&apos;re competing, creating, or just vibing with the community, this tee lets you carry the spirit of DotSlash wherever you go.
            </motion.div>

            <br />
            <br />
            <motion.div
              className="hidden md:block"
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}>
              Limited edition and up for grabs—once they&apos;re gone, they&apos;re gone! Don&apos;t miss your chance to own a piece of the fest. Lock in your order now and be part of something bigger.
            </motion.div>
          </div>

          <HoverButton small={false} />
        </div>

        <div className="md:w-[45%] w-[450px] flex justify-center absolute max-sm:top-[550px] max-sm:right-[50vw] max-sm:translate-x-1/2 right-0 top-1/2 -translate-y-1/2 md:mb-60 ">
          <Image
            src={TshirtImage}
            alt="T-shirt"
            className="object-contain lg:max-w-[780px] lg:max-h-[780px] md:mr-20 md:max-w-[450px] max-w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}
