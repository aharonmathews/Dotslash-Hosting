"use client"
import { Unbounded, Noto_Sans } from 'next/font/google';
import { motion } from "framer-motion"
import { paragraphVariants } from '../lib/ParagraphAnimation';
import { headingVariants } from '../lib/HeadingAnimation';

const unbounded = Unbounded({ weight: '400', style: 'normal', preload: false });
const notoSans = Noto_Sans({ weight: '400', style: 'normal', preload: false });
/* const unboundedBold = Unbounded({ weight: '700', style: 'normal' }); */

const CollaborateSection = () => {
    return (
        <section id="collaboration" className="bg-black  text-white py-12 md:py-16 px-8 min-h-screen w-full flex flex-col justify-center">
            {/* Headline */}
            <div className="mb-16">
                <h2 className={`text-4xl md:text-7xl lg:text-8xl  ${unbounded.className} uppercase mb-8 lg:mb-12 2xl:pl-16`}>COLLABORATE<br />WITH US</h2>
            </div>

            {/* Two-column cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 justify-evenly max-w-7xl mx-auto ">
                {/* Sponsors Card */}
                <div className="bg-[#D1A83A] text-black p-8  rounded-lg relative group cursor-pointer h-auto md:h-96 ">
                    <motion.h3 
                    variants={headingVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`text-2xl md:text-3xl lg:text-4xl ${unbounded.className} mb-4`}>For Sponsors</motion.h3>
                    <motion.div
                        variants={paragraphVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`text-sm md:text-base ${notoSans.className} mb-8 `}>
                        Partner with us to elevate DotSlash &apos;25! Gain visibility among tech enthusiasts, students, and professionals while supporting an exciting tech fest. Let&apos;s make an impact together.

                    </motion.div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="absolute bottom-6 right-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </div>
                </div>

                {/* Clubs Card */}
                <a href="https://forms.gle/r4VKAswC8zZhFrdY9" target="_blank" className="bg-[#D1A83A] text-black p-8  rounded-lg relative group cursor-pointer h-auto md:h-96">
                    <motion.h3 
                    variants={headingVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`text-2xl md:text-3xl lg:text-4xl ${unbounded.className} mb-4`}>For Clubs</motion.h3>
                    <motion.div
                        variants={paragraphVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`text-sm md:text-base ${notoSans.className} mb-8 `}>
                        Collaborate with DotSlash &apos;25 to showcase your club&apos;s vision. Host workshops, competitions, or exhibits and engage with passionate tech minds!

                    </motion.div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="absolute bottom-6 right-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default CollaborateSection;