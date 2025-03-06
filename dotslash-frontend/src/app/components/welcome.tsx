import sphere from '../assets/sphere.png';
import Image from 'next/image';
import { Unbounded } from 'next/font/google';

const unbounded = Unbounded({weight: '400', style: 'normal', preload:false});
const unboundedBold = Unbounded({weight: '700', style: 'normal', preload:false});

export default function Welcome ()  {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <div className='flex flex-row items-center justify-start space-x-36 pt-10 px-24'>
                <div className={`text-9xl text-[#D1A83A]  ${unbounded.className} leading-snug` }>
                    DotSlash 2025

                </div>
                <div className='flex items-center justify-items-end'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic reiciendis deleniti a error autem iusto, placeat incidunt et? Veritatis laborum cumque harum aut reiciendis, dolorem pariatur voluptatibus laboriosam esse. Temporibus.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi laborum corrupti blanditiis aspernatur voluptatem tempora suscipit ratione explicabo, assumenda, omnis aliquam odio impedit voluptate totam error quidem commodi similique quam?
                </div>        
            </div>
            <div className='relative w-full h-fit'>
                <Image 
                    src={sphere} 
                    alt="sphere" 
                    width={800} 
                    priority 
                    className='relative z-10  px-24'
                />
                <div className={`text-9xl ${unbounded.className} absolute w-fit whitespace-nowrap`} 
                        style={{ top: '90%', transform: 'translateY(-50%)' }}>
                    DOTSLASH. DOTSLASH. DOTSLASH. DOTSLASH.
                </div>
            </div>        
        </div>

    );
}