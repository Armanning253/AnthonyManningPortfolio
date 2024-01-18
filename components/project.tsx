"use client";

import { useRef } from 'react'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description,
    /* gitHubLink, liveLink, */ // ! comment out links 
    tags, imageUrl }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className='group mb-3 sm:mb-8 last:mb-0 '
        >
            <section
                className=" relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem]  hover:bg-gray-200 transition sm:group-even:pl-8 rounded-lg dark:text-white dark:bg-white/10 dark:hover:bg-white/20 ">
                <div className="flex flex-col h-full pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:group-even:ml-[20rem] ">
                    <h3 className='text-2xl font-semibold'> {title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
                        {description}
                    </p>
                    <div className='flex justify-center gap-2 my-6'>
                        <button
                            className='bg-gray-900 text-white px-9 py-2 items-center rounded-full outline-none focus:scale-105 hover:scale-105 transition'>
                            {/* <a href={gitHubLink} target='_blank' >
                                GitHub
                            </a> */} // ! comment out link
                        </button>
                        <button
                            className='bg-white dark:bg-gray-100 border-2  text-black/70 px-9 py-2  rounded-full focus:scale-105 hover:scale-105 transition'>
                            {/* <a href={liveLink} target='_blank' >
                                Live
                            </a> */} // ! comment out link
                        </button>
                    </div>

                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {tags.map((tag, index) => (
                            <li
                                className=' bg-black/[0.7] px-3 pu-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'
                                key={index}>{tag}</li>
                        ))}
                    </ul>
                </div >
                <Image
                    src={imageUrl}
                    alt='Project i worked on'
                    quality={95}
                    className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-105
         group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-1
         group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-1 
         group-even:right-[initial] group-even:-left-40' />
            </section >
        </motion.div>);
}
