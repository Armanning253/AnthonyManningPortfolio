"use client";

import Image from 'next/image';
import React from 'react';
import profilePic from '@/public/profile.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from 'react-icons/Hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.9);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            className='mb-28 max-w-[45rem] text-center sm:mb-0 scroll-mt-[100rem]'
            id='home'
        >
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.5
                        }}
                    >
                        <Image
                            src={profilePic}
                            alt='Picture of Anthony Manning'
                            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                        />
                    </motion.div>
                    {/* <span className='text-2xl absolute bottom-0 right-0 text-blue-500' >
                        Web Dev
                    </span> */} {/* ------------- stupid wave thing ----------- */}
                </div>
            </div>
            <motion.h1
                className='mb-10 mt-4 px-4 text-2xl font-medium !leading[1.5] sm-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
            >
                <span className="font-bold">Hello, I'm Tony.</span> I'm a{" "}
                <span className="font-bold">front end software developer </span> .I have a wide range of knowledge in the web development ecosystem. A keen mind for problem solving with good teamwork and communication skills. <span className="italic">Motivated developer</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>.
            </motion.h1>
            <motion.div
                className='flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
            >
                <Link
                    href="#contact"
                    className='group bg-gray-900 text-white px-7 py-3 flex items-center rounded-full gap-2 outline-none focus:scale-110 hover:scale-110  hover:bg-gray-950 active:scale-105 transition'
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                </Link>

                <a href='https://profile.indeed.com/resume' download className=' group bg-white px-7 py-3 gap-2 rounded-full flex items-center focus:scale-110 hover:scale-110 hover:bg-white-50 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'>
                    Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition ' />
                </a>

                <a className=' bg-white text-gray-700 p-4 gap-2 rounded-full flex items-center focus:scale-[1.15] hover:scale-[1.15] hover:text-grey-950 hover:bg-white-50 active:scale-110 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
                    href='https://www.linkedin.com/in/anthony-manning-b2432516a/'
                    target='_blank'
                >
                    <BsLinkedin />
                </a>

                <a className='bg-white text-gray-700 p-4 gap-2 rounded-full flex items-center text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-grey-950 hover:bg-white-50 active:scale-110 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
                    href='https://github.com/Armanning253'
                    target='_blank'
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}
