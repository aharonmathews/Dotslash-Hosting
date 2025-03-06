
import Image from "next/image"
import countdown from "../assets/countdown.png"

export default function Countdown() {
    return(
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <Image src={countdown} alt="countdown"  priority className="h-3/6 object-cover md:object-contain md:h-auto" />
        </div>
    )
}