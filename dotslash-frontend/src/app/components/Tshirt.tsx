import Image from "next/image";
import TshirtImage from "../assets/dotshirt.png";
import Tbackground from "../assets/Tbackground.png";
import { Unbounded } from "next/font/google";
import ShaderCanvas from "./shaderCanvas";
import HoverButton from "./HoverButton";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["400", "700"] });

export default function Tshirt() {
  return (
    <div id="tshirt" className="relative z-10 md:w-full h-screen inset-0 flex flex-col items-start justify-start text-white">
      <div className="absolute inset-0 md:w-full w-[600px] md:h-[800px] h-[1000px] ">
        <ShaderCanvas image="/Tbackground.png" />
        <div className="absolute inset-0 w-screen bg-black opacity-40 "></div>
      </div>

      <div className="relative flex md:flex-row flex-col justify-between max-sm:py-0 px-6 h-full w-full pt-16 mt-7 md:mt-10">
        <div className="text-left mb-10  md:ml-10 md:pl-10 h-full">
          <h1 className={`md:text-6xl xl:text-8xl text-4xl ${unbounded.className} mb-5`}>
            GRAB YOUR <br />
            <span className="md:mt-5 block">TEES</span>
          </h1>

          <p className="text-slate-200 text-sm lg:text-base leading-relaxed mt-4  md:w-[43%] w-[350px]">
            Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo.
            Dui lectus venenatis ut nisl. Ut eu vivamus turpis commodo vitae
            viverra.. Auctor vel ut sagittis viverra. Sollicitudin interdum amet
            sit orci facilisis et..
            <br />
            <br />
            Ullamcorper lectus duis sed in amet.. Volutpat eros ut augue lacus
            commodo.. Nulla dui volutpat in a non faucibus arcu in.. Massa
            molestie quis morbi id sit dictum odio diam elit..
          </p>

          <HoverButton small={false}/>
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
