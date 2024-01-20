import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import BudesCodeAcademyImg from "@/public/budescode-academy.png";
import CTFImage from "@/public/ctf.png";
import LotteryImage from "@/public/lottery.png";

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
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Full-Stack Developer",
        location: "Remote",
        description:
            "I am full-stack developer working as a freelancer. My stack includes Django, React, Next.js, TypeScript, Tailwind, Prisma and MySQL. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2020 - Present",
    },
    {
        title: "Budescode Academy | Full-Stack Developer",
        location: "Remote",
        description:
            "Some frontend work lol",
        icon: React.createElement(SiDjango),
        date: "September 2023 - Present",
    },
    {
        title: "Accuvend | Front-End Developer",
        location: "Lagos, NG",
        description:
            "Led front-end development at Accuvend, contributing to an intuitive admin dashboard and responsive website. Translated design concepts into engaging user interfaces while ensuring robust connectivity and data exchange. Collaborated effectively within a team to achieve project objectives.",
        icon: React.createElement(CgWorkAlt),
        date: "November 2023",
    },
    {
        title: "Spire Edge Realty | Full-Stack Developer",
        location: "Lagos, NG",
        description:
            "Developed and deployed a responsive digital marketing website, enhancing sales by up to 40%. Designed and implemented a modern, device-compatible user interface. Integrated a custom property search feature enabling users to search based on location, type, price, and more.",
        icon: React.createElement(FaPython),
        date: "August 2020 - Decemeber 2020",
    },

] as const;

export const projectsData = [
    {
        title: "Budescode Academy",
        description:
            "Learning Platform for developers to learn and improve their skills.",
        tags: ["Django", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: BudesCodeAcademyImg,
        link: "https://academy.budescode.com/"
    },
    {
        title: "GDG CTF Challenge",
        description:
            "An engaging online game within the Google Developer Group (GDG) community. Participants explore the GDG event website, discovering hidden flags to earn points and encourage interactive learning.",
        tags: ["React", "Django", "Tailwind", "React Query"],
        imageUrl: CTFImage,
        link: "https://gdg-benin.vercel.app/"
    },
    {
        title: "Rapid Draw",
        description: "A decentralized application (dapp) on the Polygon (Matic) blockchain designed for conducting lotteries. Users can participate by purchasing tickets using Matic cryptocurrency and have the chance to win rewards.",
        tags: ["Ethereum", "Polygon", "Solidity", "Next.js", "ThirdWeb", "Tailwind"],
        imageUrl: LotteryImage,
        link: "https://rapidraw.vercel.app/"
    },
    // {
    //     title: "E-Commerce",
    //     description:
    //         "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    //     tags: ["React", "Next.js", "MySQL", "Tailwind", "Prisma", "Zustand"],
    //     imageUrl: "",
    //     link: "link"
    // },
]

export const skillsData = [
    "Python",
    "Django",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "Zustand",
    "Tanstack Query",
    "Redis",
    "PostgreSQL",
    "Framer Motion",
] as const;
