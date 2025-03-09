import Image from "next/image";
import TshirtImage from "../assets/tshirt.png";
import Tbackground from "../assets/Tbackground.png";
import { Unbounded} from "next/font/google";
import ShaderCanvas from "./shaderCanvas";
import HoverButton from "./HoverButton";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["400", "700"] });

export default function Tshirt() {
  return (
    <div className="relative md:w-full h-screen inset-0 flex flex-col items-start justify-start text-white ">
      <div className="absolute inset-0 md:w-full w-[600px] md:h-[800px] h-[1000px] ">
        <ShaderCanvas image="/Tbackground.png" />
        <div className="absolute inset-0 bg-black opacity-40 "></div>
      </div>

      <div className="relative flex md:flex-row flex-col justify-between max-w-10xl p-6 h-full w-full pt-16 mt-20">
        <div className="md:w-[70%] w-[300px] text-left mb-10  md:ml-10 md:pl-10">
          <h1 className={`md:text-8xl text-2xl ${unbounded.className} mb-5`}>
            GRAB YOUR <br />
            <span className="md:mt-5 block">TEES</span>
          </h1>

          <p className="text-xs leading-relaxed mt-10  md:w-[43%] w-[350px]">
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

          <HoverButton />
        </div>

        <div className="md:w-[30%] w-[450px] flex justify-center items-center md:mb-60 ">
          <Image
            src={TshirtImage}
            alt="T-shirt"
            width={600}
            height={600}
            className="object-contain md:max-w-[580px] md:max-h-[580px] mr-20 max-w-[450px] max-h-[450px]"
          />
        </div>
      </div>
    </div>
  );
}
