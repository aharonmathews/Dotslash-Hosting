"use client"
import sphere from '../assets/final.gif';
import Image from 'next/image';
import { Unbounded } from 'next/font/google';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { paragraphVariants } from '../lib/ParagraphAnimation';

const unbounded = Unbounded({ weight: '400', style: 'normal', preload: false });
const unboundedBold = Unbounded({ weight: '700', style: 'normal', preload: false });


export default function Welcome() {
    const firstTextRef = useRef<HTMLDivElement>(null);
    const secondTextRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    //Banner animation using gsap
    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        let xPercent = 0;
        let direction = -1; // Start with this direction
        let animationId: number;

        // Calculate a better end position based on viewport
        const endPosition = Math.min(window.innerHeight * 5, 10000);

        // Create the scroll trigger to control direction based on scroll
        gsap.to(sliderRef.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: endPosition,
                onUpdate: (self) => {
                    direction = self.direction * -1;
                },
                invalidateOnRefresh: true,
                markers: false
            },
            x: "-500px",
        });

        // Animate function for smooth continuous movement
        const animate = () => {
            if (xPercent < -100) {
                xPercent = 0;
            }
            else if (xPercent > 0) {
                xPercent = -100;
            }

            if (firstTextRef.current && secondTextRef.current) {
                gsap.set(firstTextRef.current, { xPercent: xPercent });
                gsap.set(secondTextRef.current, { xPercent: xPercent });
            }

            animationId = requestAnimationFrame(animate);
            xPercent += 0.075 * direction;
        };

        // Start the animation
        animationId = requestAnimationFrame(animate);

        // Cleanup
        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div id="home" className="flex flex-col w-full min-h-screen">
            <div className='flex justify-start pt-7  pl-[10%] md:pt-10 md:px-[5%] xl:px-[6.5rem] -mb-3 md:-mb-10'>
                Welcome to
            </div>
            <div className='flex flex-col xl:flex-row items-center justify-start md:space-x-36 pt-7 px-12 space-y-7 xl:space-y-0 md:pt-10 xl:px-24'>
                <div className={`text-6xl md:text-9xl text-[#D1A83A] ${unbounded.className} leading-snug`}>
                    DotSlash 2025
                </div>
                <motion.div
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }} 
                className='flex items-center justify-center md:justify-items-end'>
                    DotSlash 2025 is where technology meets thrill, creativity sparks innovation, and every moment is an experience to remember! Organized by the CSE department, this isn&apos;t just about tech—it&apos;s about energy, competition, and pure excitement. Dive into hands-on workshops, challenge yourself in mind-bending contests, and explore a world where tech blends seamlessly with fun. Whether you&apos;re here to test your skills, pick up something new, or just soak in the vibe, DotSlash guarantees an electrifying atmosphere with surprises at every turn. Get ready for a celebration of tech like never before!
                </motion.div>
            </div>
            <div className='relative w-full flex justify-center items-center lg:-mt-20'>
                <div className='relative w-fit'>
                    <Image src={sphere} alt="sphere" width={1400} priority className='relative z-10 md:px-24' unoptimized={true} />
                </div>
            </div>
            <div className="overflow-hidden relative w-full h-32 md:-mt-[6rem] lg:-mt-[8rem] xl:-mt-[10rem]">
                <div ref={sliderRef} className="flex whitespace-nowrap">
                    <div
                        ref={firstTextRef}
                        className={`text-6xl md:text-9xl ${unbounded.className} pr-8`}
                    >
                        ./CULTURALS  ./TECH  ./INNOVATION
                    </div>
                    <div
                        ref={secondTextRef}
                        className={`text-6xl md:text-9xl ${unbounded.className} pr-8`}
                    >
                        ./CULTURALS  ./TECH  ./INNOVATION
                    </div>
                </div>
            </div>
        </div>
    );
}