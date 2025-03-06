
import Image from "next/image"
import countdown from "../assets/countdown.png"

export default function Countdown() {
    return(
        <div className="flex flex-col items-center justify-center p-8 h-screen w-full">
            <Image src={countdown} alt="countdown"  priority />
        </div>
    )
}