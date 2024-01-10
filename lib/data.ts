import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import landscapeImg from "@/public/landscapeApp.png";
import shopAppImg from "@/public/shopApp.png";
import youtubeCloneImg from "@/public/youtubeClone.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    // {
    //     name: "Experience",
    //     hash: "#experience",
    // },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Landscaping",
        description:
            "This project shows that I can work with React, Styled Components, Context provider",
        gitHubLink: "https://github.com/Armanning253/ManningLandscape",
        liveLink: "#",
        tags: ["React", "styled components", "Context API"],
        imageUrl: landscapeImg,
    },
    {
        title: "Store App",
        description:
            "Follow along project from Zero to Master on Udemy",
        tags: ["React", "Redux", "Context API", "Firebase", "Stripe API", "Styled-Components", "GraphQL", "Apollo"],
        imageUrl: shopAppImg,
    },
    {
        title: "Youtube Clone",
        description:
            "This project was a practice of sharpening my skills at using an API and copying the look of a current website",
        tags: ["React", "Google API", "Axios"],
        imageUrl: youtubeCloneImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Figma",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "Framer Motion",
] as const;