"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {

    const { ref } = useSectionInView('About', 0.75);

    return (
        <motion.section
            ref={ref}
            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
        >
            <SectionHeading>about me</SectionHeading>
            <p className='mb-3'>
                A self-motivated, creative, and ambitious professional {" "}
                <span className="font-medium">front end developer</span>.  I bringing deep understanding of Modern , {" "}<span className="font-medium">CSS, JavaScript, and React</span>.{" "}
                with ability to execute and implement standard software architecture patterns.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    React, Next.js
                </span>
                . I am also familiar with TypeScript. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>
            <p>
                <span className="italic">When I'm not coding</span>, I enjoy hiking,
                exploring small towns, and customizing/ crafting things. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning{" "}
                <span className="font-medium">how to dehydrated foods and brew kombucha</span>.
            </p>
        </motion.section>
    )
}
